import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {
    createAcademics,
    getAcademics,
    updateAcademics,
    deleteAcademics
} from '../../../controllers/v1/AcademicControler.js'

/**
 * @swagger
 * components:
 *   schemas:
 *     Academic:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 100
 *         institute:
 *           type: string
 *           example: "MIT"
 *         degree:
 *           type: string
 *           example: "BSc Computer Science"
 *         startYear:
 *           type: integer
 *           example: 2018
 *         endYear:
 *           type: integer
 *           nullable: true
 *           example: 2022
 */

/**
 * @swagger
 * /academics:
 *   post:
 *     summary: Create a new Academic record
 *     tags: [Academics]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Academic info to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - institute
 *               - degree
 *               - startYear
 *             properties:
 *               institute:
 *                 type: string
 *                 example: "MIT"
 *               degree:
 *                 type: string
 *                 example: "BSc Computer Science"
 *               startYear:
 *                 type: integer
 *                 example: 2018
 *               endYear:
 *                 type: integer
 *                 nullable: true
 *                 example: 2022
 *     responses:
 *       201:
 *         description: Academic record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Academic'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /academics:
 *   get:
 *     summary: Get all Academic records for the authenticated user
 *     tags: [Academics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of Academic records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Academic'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /academics/{id}:
 *   put:
 *     summary: Update an existing Academic record by ID
 *     tags: [Academics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Academic record ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated Academic data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               institute:
 *                 type: string
 *                 example: "MIT"
 *               degree:
 *                 type: string
 *                 example: "BSc Computer Science"
 *               startYear:
 *                 type: integer
 *                 example: 2018
 *               endYear:
 *                 type: integer
 *                 nullable: true
 *                 example: 2022
 *     responses:
 *       200:
 *         description: Academic record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Academic'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Academic record not found
 */

/**
 * @swagger
 * /academics/{id}:
 *   delete:
 *     summary: Delete an Academic record by ID
 *     tags: [Academics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Academic record ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Academic record deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Academic record not found
 */


const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create basic info
router.post('/', createAcademics);

// Get basic info
router.get('/', getAcademics);

// Update basic info
router.put('/:id', updateAcademics);

// Delete basic info
router.delete('/:id', deleteAcademics);

export default router;