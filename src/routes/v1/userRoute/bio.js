import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import * as bioController from '../../../controllers/v1/bioController.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     BioSummary:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 101
 *         shortBio:
 *           type: string
 *           nullable: true
 *           example: "Passionate about building scalable backend systems."
 *         tagline:
 *           type: string
 *           nullable: true
 *           example: "Backend Engineer | Open Source Contributor"
 */

/**
 * @swagger
 * /collab/v1/bio/:
 *   post:
 *     summary: Create bio summary for the authenticated user
 *     tags: [BioSummary]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shortBio:
 *                 type: string
 *                 example: "Software Engineer with a focus on AI and backend systems."
 *               tagline:
 *                 type: string
 *                 example: "ML Engineer | Python | FastAPI"
 *     responses:
 *       201:
 *         description: Bio summary created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BioSummary'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /collab/v1/bio/:
 *   get:
 *     summary: Get bio summary for the authenticated user
 *     tags: [BioSummary]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bio summary retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BioSummary'
 *       404:
 *         description: Bio summary not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /collab/v1/bio/:
 *   put:
 *     summary: Update bio summary for the authenticated user
 *     tags: [BioSummary]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shortBio:
 *                 type: string
 *                 example: "Building distributed systems at scale."
 *               tagline:
 *                 type: string
 *                 example: "Software Engineer | Gopher | Cloud Native"
 *     responses:
 *       200:
 *         description: Bio summary updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BioSummary'
 *       404:
 *         description: Bio summary not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /collab/v1/bio/:
 *   delete:
 *     summary: Delete bio summary for the authenticated user
 *     tags: [BioSummary]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bio summary deleted successfully
 *       404:
 *         description: Bio summary not found
 *       401:
 *         description: Unauthorized
 */


const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create bio
router.post('/', bioController.createUserBio);

// Get bio
router.get('/', bioController.getUserBio);

// Update bio
router.put('/',bioController.updateUserBio);

// Delete bio
router.delete('/',bioController.deleteUserBio);

export default router;
