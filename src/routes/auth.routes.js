import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     SignupRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"
 *         password:
 *           type: string
 *           example: "securepassword123"
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"
 *         password:
 *           type: string
 *           example: "securepassword123"
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Login successful"
 *         data:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
 *             user:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: "john@example.com"
 *                 isEmailVerified:
 *                   type: boolean
 *                   example: true
 */

/**
 * @swagger
 * /collab/v1/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupRequest'
 *     responses:
 *       201:
 *         description: User created and OTP sent to email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully. Please verify your email with the OTP sent."
 *       400:
 *         description: Email or password missing, or already exists
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     VerifyOTPRequest:
 *       type: object
 *       required:
 *         - email
 *         - otp
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"
 *         otp:
 *           type: string
 *           example: "123456"

 *     ResendOTPRequest:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"

 *     UserInfo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         email:
 *           type: string
 *           example: "john@example.com"
 *         isEmailVerified:
 *           type: boolean
 *           example: true
 *         role:
 *           type: string
 *           example: "USER"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-06-19T07:52:33.935Z"
 */
/**
 * @swagger
 * /collab/v1/auth/verifyOTP:
 *   post:
 *     summary: Verify OTP for email confirmation
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VerifyOTPRequest'
 *     responses:
 *       200:
 *         description: Email verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email verified successfully"
 *       400:
 *         description: Invalid OTP or expired
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /collab/v1/auth/resendOTP:
 *   post:
 *     summary: Resend OTP to email
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResendOTPRequest'
 *     responses:
 *       200:
 *         description: OTP resent to email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "OTP resent to email"
 *       400:
 *         description: Email not found or already verified
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /collab/v1/auth/me:
 *   get:
 *     summary: Get authenticated user info
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserInfo'
 *       401:
 *         description: Unauthorized / Invalid token
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /collab/v1/auth/login:
 *   post:
 *     summary: Authenticate a user and return a JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login successful, JWT token returned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Missing credentials
 *       401:
 *         description: Invalid email/password or unverified email
 *       500:
 *         description: Server error
 */

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/verifyOTP', asyncHandler(AuthController.verifyOTP));
router.post('/resendOTP', AuthController.resendOTP);

// Login route
router.post('/login', AuthController.login);

// Logout route


// Get current user route
router.get('/me', AuthController.getCurrentUser);

export default router;