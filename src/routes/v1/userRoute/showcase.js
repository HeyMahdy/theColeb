import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserShowcase,
    createUserShowcase,
    updateUserShowcase,
    deleteUserShowcase
} from '../../../controllers/v1/showcaseController.js';

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Get showcase for the authenticated user
router.get('/', getUserShowcase);

// Create showcase for the authenticated user
router.post('/', createUserShowcase);

// Update showcase for the authenticated user
router.put('/', updateUserShowcase);

// Delete showcase for the authenticated user
router.delete('/', deleteUserShowcase);

export default router;
