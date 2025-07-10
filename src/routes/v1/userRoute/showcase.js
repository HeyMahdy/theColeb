import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserShowcase,
    createUserShowcase,
    updateUserShowcase,
    deleteUserShowcase
} from '../../../controllers/v1/showcaseController.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     Showcase:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 101
 *         github:
 *           type: string
 *           nullable: true
 *           example: "https://github.com/johndoe"
 *         portfolio:
 *           type: string
 *           nullable: true
 *           example: "https://johndoe.dev"
 *         linkedin:
 *           type: string
 *           nullable: true
 *           example: "https://linkedin.com/in/johndoe"
 *         email:
 *           type: string
 *           nullable: true
 *           example: "john@example.com"
 *         whatsapp:
 *           type: string
 *           nullable: true
 *           example: "+8801712345678"
 */

/**
 * @swagger
 * /collab/v1/showcase/:
 *   post:
 *     summary: Create a showcase
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Showcase'
 *     responses:
 *       201:
 *         description: Showcase created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Showcase'

 *   get:
 *     summary: Get the authenticated user's showcase
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Showcase found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Showcase'

 * /collab/v1/showcase/{id}:
 *   put:
 *     summary: Update showcase
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Showcase ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Showcase'
 *     responses:
 *       200:
 *         description: Showcase updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Showcase'

 *   delete:
 *     summary: Delete showcase
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Showcase ID
 *     responses:
 *       200:
 *         description: Showcase deleted
 */

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Get showcase for the authenticated user
router.get('/', asyncHandler(getUserShowcase));

// Create showcase for the authenticated user
router.post('/', asyncHandler(createUserShowcase));

// Update showcase for the authenticated user
router.put('/', asyncHandler(updateUserShowcase));

// Delete showcase for the authenticated user
router.delete('/', asyncHandler(deleteUserShowcase));

export default router;
