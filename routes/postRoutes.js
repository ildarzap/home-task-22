import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/postController.js';
import { validateCreatePost, validateUpdatePost } from '../validators/post.validator.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', validateCreatePost, createPost);
router.patch('/:id', validateUpdatePost, updatePost);
router.delete('/:id', deletePost);

export default router;
