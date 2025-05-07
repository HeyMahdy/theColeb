import OTPService from '../services/otp.service.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient, Prisma } from '../../generated/prisma/client/index.js';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Make sure to set this in your environment variables

class AuthController {
  static async signup(req, res) {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({
          message: 'Email and password are required',
        });
      }

      // Validate password length
      if (password.length < 6) {
        return res.status(400).json({
          message: 'Password must be at least 6 characters long',
        });
      }

      // Check if user already exists
      const existingUser = await prisma.user.findFirst({
        where: {
          email: email
        },
      });

      if (existingUser) {
        return res.status(400).json({
          message: 'User with this email already exists',
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          isEmailVerified: false
        },
      });

      // Generate and save OTPs
      const otp = await OTPService.generateOTP();
      await OTPService.saveOTP(user.id, otp);
      await OTPService.sendOTP(email, otp);

      return res.status(201).json({
        message: 'User created successfully. Please verify your email with the OTP sent.'
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.error(e.code);
        return res.status(500).json({ message: "Database error occurred" });
      } else {
        console.error(e);
        return res.status(500).json({ message: "An error occurred during signup" });
      }
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({
          message: 'Email and password are required',
        });
      }

      // Find user
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(401).json({
          message: 'Invalid email or password',
        });
      }

      // Check if email is verified
      if (!user.isEmailVerified) {
        return res.status(401).json({
          message: 'Please verify your email first',
        });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({
          message: 'Invalid email or password',
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: user.id,
          email: user.email 
        },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      return res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          email: user.email,
          isEmailVerified: user.isEmailVerified
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({
        message: 'An error occurred during login',
      });
    }
  }

  static async verifyOTP(req, res) {
    try {
      const { userId, otp } = req.body;

      const isValid = await OTPService.verifyotp(userId, otp);

      if (!isValid) {
        return res.status(400).json({
          message: 'Invalid or expired OTP',
        });
      }

      return res.status(200).json({
        message: 'Email verified successfully',
      });
    } catch (error) {
      console.error('OTP verification error:', error);
      return res.status(500).json({
        message: 'An error occurred during OTP verification',
      });
    }
  }

  static async resendOTP(req, res) {
    try {
      const { email } = req.body;

      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      // Generate and save new OTP
      const otp = await OTPService.generateOTP();
      await OTPService.saveOTP(user.id, otp);
      await OTPService.sendOTP(email, otp);

      return res.status(200).json({
        message: 'OTP resent successfully',
      });
    } catch (error) {
      console.error('Resend OTP error:', error);
      return res.status(500).json({
        message: 'An error occurred while resending OTP',
      });
    }
  }

  static async getCurrentUser(req, res) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({
          message: 'No token provided',
        });
      }

      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          email: true,
          isEmailVerified: true
        }
      });

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      return res.status(200).json({
        user
      });
    } catch (error) {
      console.error('Get current user error:', error);
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
  }
}

export default AuthController; 