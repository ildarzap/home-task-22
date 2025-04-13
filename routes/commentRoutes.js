import express from 'express';
import { addComment, deleteComment } from '../controllers/commentController.js';
import { commentValidator } from '../validators/comment.validator.js';

const router = express.Router();

router.post('/:postId', commentValidator, addComment);
router.delete('/:postId/:commentId', deleteComment);

export default router;
