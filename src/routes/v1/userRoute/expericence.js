import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import { checkRole } from '../../../middlewares/roleMiddleware.js';
import {
    createExperience,
    getExperiences,
    updateExperience,
    deleteExperience
} from '../../../controllers/v1/expericenController.js'

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create experience - only users can create their own experiences
router.post('/', checkRole(['USER', 'ADMIN']), createExperience);

// Get experiences - both users and admins can view
router.get('/', checkRole(['USER', 'ADMIN']), getExperiences);

// Update experience - only users can update their own experiences
router.put('/:id', checkRole(['USER', 'ADMIN']), updateExperience);

// Delete experience - only users can delete their own experiences
router.delete('/:id', checkRole(['USER', 'ADMIN']), deleteExperience);

export default router;