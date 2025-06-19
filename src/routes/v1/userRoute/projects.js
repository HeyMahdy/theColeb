import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserProjects,
    createUserProject,
    updateUserProject,
    deleteUserProject
} from '../../../controllers/v1/projectsController.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 101
 *         name:
 *           type: string
 *           example: "AI Resume Builder"
 *         description:
 *           type: string
 *           nullable: true
 *           example: "Web app that generates resumes using AI"
 *         link:
 *           type: string
 *           nullable: true
 *           example: "https://resumeai.dev"
 *         techUsed:
 *           type: array
 *           items:
 *             type: string
 *           example: ["React", "Node.js", "MongoDB"]
 *         status:
 *           type: string
 *           enum: [inprogress, finished]
 *           example: "finished"
 */

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a project
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       201:
 *         description: Project created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'

 *   get:
 *     summary: Get all projects for the authenticated user
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'

 * /projects/{id}:
 *   put:
 *     summary: Update a project by ID
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Project ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: Project updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'

 *   delete:
 *     summary: Delete a project by ID
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Project deleted
 */

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
