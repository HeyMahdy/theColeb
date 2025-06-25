import { Router } from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost , interestPost , UninterestPost } from '../../../controllers/v1/postController.js';

import verifyToken  from '../../../middlewares/authenticateToken.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';

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


router.post('/:id',asyncHandler(interestPost));

router.delete('/id',asyncHandler(UninterestPost));

export default router;
