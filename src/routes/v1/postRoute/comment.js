import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import { addComment, getComments, deleteComment } from '../../../controllers/v1/commentController.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         postId:
 *           type: integer
 *           example: 10
 *         userId:
 *           type: integer
 *           example: 5
 *         content:
 *           type: string
 *           example: "Great post!"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-07-17T10:30:00Z"
 *         user:
 *           $ref: '#/components/schemas/UserInfo'
 */

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: API endpoints for managing comments on posts
 */

/**
 * @swagger
 * /collab/v1/posts/{postId}/comments:
 *   post:
 *     summary: Add a comment to a post
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to comment on
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Great post!"
 *     responses:
 *       201:
 *         description: Comment added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Comment'
 *       400:
 *         description: Content is required
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Failed to add comment
 */

/**
 * @swagger
 * /collab/v1/posts/{postId}/comments:
 *   get:
 *     summary: Get all comments for a post
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to get comments for
 *     responses:
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Comment'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Failed to get comments
 */

/**
 * @swagger
 * /collab/v1/posts/comments/{commentId}:
 *   delete:
 *     summary: Delete a comment by ID
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the comment to delete
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Comment deleted"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Failed to delete comment
 */

const router = Router({ mergeParams: true });
router.use(verifyToken);
router.post('/:postId/comments', asyncHandler(addComment));
router.get('/:postId/comments', asyncHandler(getComments));
router.delete('/comments/:commentId', asyncHandler(deleteComment));
router.post('/posts/:postId/comments/:commentId/reply', asyncHandler(replyComment));

export default router;
