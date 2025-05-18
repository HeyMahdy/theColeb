import { Router } from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../../../controllers/v1/postController.js';

import verifyToken  from '../../../middlewares/authenticateToken.js';

const router = Router();

router.use(verifyToken);
// Create a new post
router.post('/', createPost);

// Get all posts with pagination and type filter
router.get('/',  getPosts);

// Get a specific post by ID
router.get('/:id',  getPostById);

// Update a post
router.put('/:id',  updatePost);

// Delete a post
router.delete('/:id',  deletePost);

export default router;
