import express from 'express';
import AuthController from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/verifyOTP', AuthController.verifyOTP);
router.post('/resendOTP', AuthController.resendOTP);

// Login route
router.post('/login', AuthController.login);

// Logout route


// Get current user route
router.post('/me', AuthController.getCurrentUser);

export default router;