import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../../generated/prisma/client/index.js';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

class AuthService {
  static async login(email, password) {
    try {
      // Find user
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Check if email is verified
      if (!user.isEmailVerified) {
        throw new Error('Please verify your email first');
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid email or password');
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

      return {
        user: {
          id: user.id,
          email: user.email,
          isEmailVerified: user.isEmailVerified
        },
        token
      };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  static async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded;
    } catch (error) {
      console.error('Token verification error:', error);
      throw new Error('Invalid token');
    }
  }

  static async getCurrentUser(userId) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          isEmailVerified: true
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      console.error('Get current user error:', error);
      throw error;
    }
  }
}

export default AuthService; 