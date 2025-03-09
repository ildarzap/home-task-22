import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
});

export default CommentSchema;
