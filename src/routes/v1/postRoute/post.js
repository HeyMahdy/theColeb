import { Router } from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost , interestPost , UninterestPost } from '../../../controllers/v1/postController.js';

import verifyToken  from '../../../middlewares/authenticateToken.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';


/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 10
 *         title:
 *           type: string
 *           example: "Looking for a cofounder"
 *         description:
 *           type: string
 *           nullable: true
 *           example: "We need someone experienced with product management."
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-05-20T10:30:00Z"
 *         type:
 *           type: string
 *           enum:
 *             - COFOUNDER_NEEDED
 *             - MENTORSHIP
 *             - COLLABORATION
 *           example: COFOUNDER_NEEDED
 *         interested:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Interested'
 *         user:
 *           $ref: '#/components/schemas/User'
 */





/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: API endpoints for managing posts
 */

/**
 * @swagger
 * /collab/v1/posts/:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /collab/v1/posts/:
 *   get:
 *     summary: Get all posts with optional pagination and type filter
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of posts per page
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [COFOUNDER_NEEDED, MENTORSHIP, COLLABORATION]
 *         description: Filter posts by type
 *     responses:
 *       200:
 *         description: List of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /collab/v1/posts/{id}:
 *   get:
 *     summary: Get a specific post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to retrieve
 *     responses:
 *       200:
 *         description: Post data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /collab/v1/posts/{id}:
 *   put:
 *     summary: Update a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /collab/v1/posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to delete
 *     responses:
 *       204:
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 */


/**
 * @swagger
 * /collab/v1/posts/{id}/interest:
 *   post:
 *     summary: Express interest in a post (like)
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to like
 *     responses:
 *       200:
 *         description: Interest added successfully
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /collab/v1/posts/{id}/interest:
 *   delete:
 *     summary: Remove interest from a post (unlike)
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to unlike
 *     responses:
 *       204:
 *         description: Interest removed successfully
 *       404:
 *         description: Post not found
 */

const router = Router();

router.use(verifyToken);
// Create a new post
router.post('/', asyncHandler(createPost));

// Get all posts with pagination and type filter
router.get('/',  asyncHandler(getPosts));

// Get a specific post by ID
router.get('/:id',  asyncHandler(getPostById));

// Update a post
router.put('/:id', asyncHandler (updatePost));

// Delete a post
router.delete('/:id', asyncHandler(deletePost));


router.post('/:id/interest', asyncHandler(interestPost));

router.delete('/:id/interest', asyncHandler(UninterestPost));

export default router;
