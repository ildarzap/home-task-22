import mongoose from 'mongoose';
import CommentSchema from './Comment.js';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [CommentSchema],
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
