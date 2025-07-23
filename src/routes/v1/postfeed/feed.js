import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {filterUsers }from '../../../controllers/v1/searchController.js'
import { asyncHandler } from '../../../utils/asyncHandler.js';


/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API endpoints for managing users
 */

/**
 * @swagger
 * /collab/v1/filter/filter:
 *   get:
 *     summary: Filter users based on query parameters
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter users by location
 *       - in: query
 *         name: skills
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         style: form
 *         explode: true
 *         required: false
 *         description: Filter users by skills (e.g. ?skills=reactjs&skills=nodejs)
 *       - in: query
 *         name: institute
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by education institute
 *       - in: query
 *         name: degree
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by education degree
 *       - in: query
 *         name: company
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by company in experience
 *       - in: query
 *         name: jobDescription
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by job description in experience
 *     responses:
 *       200:
 *         description: Filtered users list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: this is the output
 *                 filterConditions:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


const router = Router();

router.get('/filter', verifyToken, asyncHandler(filterUsers));


export default router;

