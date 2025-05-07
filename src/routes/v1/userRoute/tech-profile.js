import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    createTechProfile,
    getTechProfile,
    updateTechProfile,
    deleteTechProfile
} from '../../../controllers/v1/techProfileController.js';

const router = Router();

// Apply authentication middleware to all routes
router.use(verifyToken);

// GET: Get tech profile for the authenticated user
router.get('/', getTechProfile);

// POST: Create tech profile for the authenticated user
router.post('/', createTechProfile);

// PUT: Update tech profile for the authenticated user
router.put('/', updateTechProfile);

// DELETE: Delete tech profile for the authenticated user
router.delete('/', deleteTechProfile);

export default router;
