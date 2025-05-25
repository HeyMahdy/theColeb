import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    createExperience,
    getExperiences,
    updateExperience,
    deleteExperience
} from '../../../controllers/v1/expericenController.js'

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create basic info
router.post('/', createExperience);

// Get basic info
router.get('/', getExperiences);

// Update basic info
router.put('/:id', updateExperience);

// Delete basic info
router.delete('/:id', deleteExperience);

export default router;