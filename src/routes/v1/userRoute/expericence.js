import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import { checkRole } from '../../../middlewares/roleMiddleware.js';
import {
    createExperience,
    getExperiences,
    updateExperience,
    deleteExperience
} from '../../../controllers/v1/expericenController.js'
/**
 * @swagger
 * components:
 *   schemas:
 *     Experience:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 101
 *         title:
 *           type: string
 *           example: "Software Engineer"
 *         company:
 *           type: string
 *           example: "Google"
 *         jobDescription:
 *           type: string
 *           nullable: true
 *           example: "Worked on frontend architecture"
 *         startDate:
 *           type: string
 *           format: date-time
 *           example: "2022-01-01T00:00:00.000Z"
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: "2023-01-01T00:00:00.000Z"
 */
/**
 * @swagger
 * /experiences:
 *   post:
 *     summary: Create a new experience
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - company
 *               - startDate
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Software Engineer"
 *               company:
 *                 type: string
 *                 example: "Google"
 *               jobDescription:
 *                 type: string
 *                 nullable: true
 *                 example: "Developed frontend features"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2022-01-01T00:00:00.000Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 nullable: true
 *                 example: "2023-01-01T00:00:00.000Z"
 *     responses:
 *       201:
 *         description: Experience created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /experiences:
 *   get:
 *     summary: Get all experiences for the authenticated user
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of experiences
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Experience'
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /experiences/{id}:
 *   put:
 *     summary: Update an experience by ID
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Experience ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Senior Software Engineer"
 *               company:
 *                 type: string
 *                 example: "Meta"
 *               jobDescription:
 *                 type: string
 *                 example: "Led backend development"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Experience updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       404:
 *         description: Experience not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /experiences/{id}:
 *   delete:
 *     summary: Delete an experience by ID
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Experience ID
 *     responses:
 *       200:
 *         description: Experience deleted successfully
 *       404:
 *         description: Experience not found
 *       401:
 *         description: Unauthorized
 */

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