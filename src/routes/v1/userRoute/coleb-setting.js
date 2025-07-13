import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserColeb,
    createUserColeb,
    updateUserColeb,
    deleteUserColeb
} from '../../../controllers/v1/collaborationController.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     Collaboration:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 101
 *         openToCollaboration:
 *           type: boolean
 *           nullable: true
 *           example: true
 *         ideaInterests:
 *           type: string
 *           nullable: true
 *           example: "AI, Web3, EdTech"
 */

/**
 * @swagger
 * /collab/v1/collab/:
 *   post:
 *     summary: Create a collaboration profile
 *     tags: [Collaboration]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collaboration'
 *     responses:
 *       201:
 *         description: Collaboration profile created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Collaboration'
 */

/**
 * @swagger
 * /collab/v1/collab/:
 *   get:
 *     summary: Get your collaboration profile
 *     tags: [Collaboration]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Collaboration profile retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Collaboration'
 *       404:
 *         description: Collaboration profile not found
 */

/**
 * @swagger
 * /collab/v1/collab/:
 *   put:
 *     summary: Update your collaboration profile
 *     tags: [Collaboration]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collaboration'
 *     responses:
 *       200:
 *         description: Collaboration profile updated
 */

/**
 * @swagger
 * /collab/v1/collab/:
 *   delete:
 *     summary: Delete your collaboration profile
 *     tags: [Collaboration]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Collaboration profile deleted
 *       404:
 *         description: Profile not found
 */

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Get collaboration settings for the authenticated user
router.get('/', asyncHandler(getUserColeb));

// Create collaboration settings for the authenticated user
router.post('/', asyncHandler(createUserColeb));

// Update collaboration settings for the authenticated user
router.put('/', asyncHandler(updateUserColeb));

// Delete collaboration settings for the authenticated user
router.delete('/', asyncHandler(deleteUserColeb));

export default router;
