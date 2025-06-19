import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {createBasicInfo,getBasicInfo,updateBasicInfo,deleteBasicInfo} from '../../../controllers/v1/BasicInfoController.js';
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
 * /basic-info:
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

 * /basic-info/{id}:
 *   put:
 *     summary: Update basic info
 *     tags: [BasicInfo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: BasicInfo ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BasicInfo'
 *     responses:
 *       200:
 *         description: Basic info updated

 *   delete:
 *     summary: Delete basic info
 *     tags: [BasicInfo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: BasicInfo ID
 *     responses:
 *       200:
 *         description: Basic info deleted
 */

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create basic info
router.post('/', createBasicInfo);

// Get basic info
router.get('/', getBasicInfo);

// Update basic info
router.put('/', updateBasicInfo);

// Delete basic info
router.delete('/', deleteBasicInfo);

export default router;
