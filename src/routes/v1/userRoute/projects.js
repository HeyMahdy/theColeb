import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserProjects,
    createUserProject,
    updateUserProject,
    deleteUserProject
} from '../../../controllers/v1/projectsController.js';

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Get all projects for the authenticated user
router.get('/', getUserProjects);

// Create a new project
router.post('/', createUserProject);

// Update a project
router.put('/:projectId', updateUserProject);

// Delete a project
router.delete('/:projectId', deleteUserProject);

export default router;
