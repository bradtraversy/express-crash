import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController.js';
const router = express.Router();

// Get all posts
router.get('/', getPosts);

// Get single post
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

export default router;
