import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserProjects,
    createUserProject,
    updateUserProject,
    deleteUserProject
} from '../../../controllers/v1/projectsController.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';
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
 * /collab/v1/project:
 *   post:
 *     summary: Create a new project
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
 *         description: Project successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 * 
 *   get:
 *     summary: Retrieve all projects of the authenticated user
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of user's projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /collab/v1/project/{projectId}:
 *   put:
 *     summary: Update an existing project by its ID
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the project to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: Project successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'

 *   delete:
 *     summary: Delete a project by its ID
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the project to delete
 *     responses:
 *       200:
 *         description: Project successfully deleted
 */


const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Get all projects for the authenticated user
router.get('/', asyncHandler(getUserProjects));

// Create a new project
router.post('/', asyncHandler(createUserProject));

// Update a project
router.put('/:projectId', asyncHandler(updateUserProject));

// Delete a project
router.delete('/:projectId', asyncHandler(deleteUserProject));

export default router;
