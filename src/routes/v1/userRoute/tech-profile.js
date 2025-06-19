import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    createTechProfile,
    getTechProfile,
    updateTechProfile,
    deleteTechProfile
} from '../../../controllers/v1/techProfileController.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     TechnicalProfile:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 101
 *         experienceLevel:
 *           type: string
 *           nullable: true
 *           example: "Intermediate"
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           example: ["JavaScript", "Node.js", "React"]
 */
/**
 * @swagger
 * /technical-profile:
 *   post:
 *     summary: Create a technical profile
 *     tags: [TechnicalProfile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - skills
 *             properties:
 *               experienceLevel:
 *                 type: string
 *                 nullable: true
 *                 example: "Intermediate"
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Python", "Django", "PostgreSQL"]
 *     responses:
 *       201:
 *         description: Technical profile created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TechnicalProfile'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /technical-profile:
 *   get:
 *     summary: Get the technical profile of the authenticated user
 *     tags: [TechnicalProfile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user's technical profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TechnicalProfile'
 *       404:
 *         description: Technical profile not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /technical-profile/{id}:
 *   put:
 *     summary: Update a technical profile by ID
 *     tags: [TechnicalProfile]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: TechnicalProfile ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               experienceLevel:
 *                 type: string
 *                 example: "Advanced"
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Java", "Spring Boot", "MySQL"]
 *     responses:
 *       200:
 *         description: Technical profile updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TechnicalProfile'
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /technical-profile/{id}:
 *   delete:
 *     summary: Delete a technical profile by ID
 *     tags: [TechnicalProfile]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: TechnicalProfile ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Technical profile deleted
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */

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
