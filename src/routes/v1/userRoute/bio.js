import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import * as bioController from '../../../controllers/v1/bioController.js';

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create bio
router.post('/', bioController.createUserBio);

// Get bio
router.get('/', bioController.getUserBio);

// Update bio
router.put('/',bioController.updateUserBio);

// Delete bio
router.delete('/',bioController.deleteUserBio);

export default router;
