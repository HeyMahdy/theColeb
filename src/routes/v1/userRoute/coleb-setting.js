import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    getUserColeb,
    createUserColeb,
    updateUserColeb,
    deleteUserColeb
} from '../../../controllers/v1/collaborationController.js';
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
 * /collaboration:
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

 * /collaboration/{id}:
 *   put:
 *     summary: Update collaboration profile
 *     tags: [Collaboration]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Collaboration ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collaboration'
 *     responses:
 *       200:
 *         description: Collaboration profile updated

 *   delete:
 *     summary: Delete collaboration profile
 *     tags: [Collaboration]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Collaboration ID
 *     responses:
 *       200:
 *         description: Collaboration profile deleted
 */

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Get collaboration settings for the authenticated user
router.get('/', getUserColeb);

// Create collaboration settings for the authenticated user
router.post('/', createUserColeb);

// Update collaboration settings for the authenticated user
router.put('/', updateUserColeb);

// Delete collaboration settings for the authenticated user
router.delete('/', deleteUserColeb);

export default router;
