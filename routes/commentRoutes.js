import express from 'express';
import { addComment, deleteComment } from '../controllers/commentController.js';

const router = express.Router();

router.post('/:postId', addComment);
router.delete('/:postId/:commentId', deleteComment);

export default router;
