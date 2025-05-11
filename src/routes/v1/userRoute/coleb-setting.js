import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserColeb,
    createUserColeb,
    updateUserColeb,
    deleteUserColeb
} from '../../../controllers/v1/collaborationController.js';

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Get collaboration settings for the authenticated user
router.get('/', getUserColeb);

// Create collaboration settings for the authenticated user
router.post('/', createUserColeb);

// Update collaboration settings for the authenticated user
router.put('/', updateUserColeb);

// Delete collaboration settings for the authenticated user
router.delete('/', deleteUserColeb);

export default router;
