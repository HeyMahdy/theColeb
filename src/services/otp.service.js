import crypto from 'crypto';
import { PrismaClient } from '../../generated/prisma/client/index.js';

const prisma = new PrismaClient();

class OTPService {
  static async generateOTP() {
    // Generate a 6-digit OTP
    return crypto.randomInt(100000, 999999).toString();
  }

  static async saveOTP(userId, otp) {
    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 10); // OTP valid for 10 minutes

    await prisma.user.update({
      where: { id: userId },
      data: {
        otp,
        otpExpiry: expiryTime,
      },
    });
  }

  static async verifyotp(userId, otp) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    console.log("the user ", user);

    if (!user || !user.otp || !user.otpExpiry) {
      return false;
    }

    // Check if OTP matches and is not expired
    const isOTPValid = (user.otp == otp) && (new Date() < user.otpExpiry);

    if (isOTPValid) {
      // Clear OTP and mark email as verified
      await prisma.user.update({
        where: { id: userId },
        data: {
          otp: null,
          otpExpiry: null,
          isEmailVerified: true,
        },
      });
    }
    console.log("the user ", user);


    return isOTPValid;
  }

  static async sendOTP(email, otp) {
    // Just console log the OTP instead of sending email
    console.log('----------------------------------------');
    console.log(`OTP for ${email}: ${otp}`);
    console.log('----------------------------------------');
    return true;
  }
}

export default OTPService;