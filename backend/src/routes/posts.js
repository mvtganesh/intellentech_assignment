import express from 'express';
import { getPosts, createPost } from '../controllers/postController.js';

const router = express.Router();

// Post routes
router.get('/', getPosts);
router.post('/', createPost);

export default router;