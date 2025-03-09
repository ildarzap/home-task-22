import Post from '../models/Post.js';

// Добавить комментарий к посту
export const addComment = async (req, res) => {
  try {
    const { user, text } = req.body;
    const post = await Post.findById(req.params.postId);
    if (!post) throw new Error('Пост не найден');

    post.comments.push({ user, text });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Удалить комментарий
export const deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) throw new Error('Пост не найден');

    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== req.params.commentId,
    );
    await post.save();
    res.json({ message: 'Комментарий удален' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
