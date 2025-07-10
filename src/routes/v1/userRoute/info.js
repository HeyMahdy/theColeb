import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {createBasicInfo,getBasicInfo,updateBasicInfo,deleteBasicInfo} from '../../../controllers/v1/BasicInfoController.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';
/**
 * @swagger
 * components:
 *   schemas:
 *     BasicInfo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 101
 *         fullName:
 *           type: string
 *           example: "Mahdy Hasan"
 *         location:
 *           type: string
 *           nullable: true
 *           example: "Dhaka, Bangladesh"
 */

/**
 * @swagger
 * /collab/v1/info:
 *   post:
 *     summary: Create basic info
 *     tags: [BasicInfo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BasicInfo'
 *     responses:
 *       201:
 *         description: Basic info created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BasicInfo'
 */

/**
 * @swagger
 * /collab/v1/info:
 *   get:
 *     summary: Get basic info for authenticated user
 *     tags: [BasicInfo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Basic info fetched
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BasicInfo'
 *       404:
 *         description: Info not found
 */

/**
 * @swagger
 * /collab/v1/info:
 *   put:
 *     summary: Update basic info
 *     tags: [BasicInfo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BasicInfo'
 *     responses:
 *       200:
 *         description: Basic info updated
 */

/**
 * @swagger
 * /collab/v1/info:
 *   delete:
 *     summary: Delete basic info
 *     tags: [BasicInfo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Basic info deleted
 *       404:
 *         description: Info not found
 */


const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create basic info
router.post('/', asyncHandler(createBasicInfo));

// Get basic info
router.get('/', asyncHandler(getBasicInfo));

// Update basic info
router.put('/', asyncHandler(updateBasicInfo));

// Delete basic info
router.delete('/', asyncHandler(deleteBasicInfo));

export default router;
