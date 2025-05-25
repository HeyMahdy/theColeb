import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    createAcademics,
    getAcademics,
    updateAcademics,
    deleteAcademics
} from '../../../controllers/v1/AcademicControler.js'


const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create basic info
router.post('/', createAcademics);

// Get basic info
router.get('/', getAcademics);

// Update basic info
router.put('/:id', updateAcademics);

// Delete basic info
router.delete('/:id', deleteAcademics);

export default router;