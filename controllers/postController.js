import Post from '../models/Post.js';

// Получить все посты
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Создать пост
export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Обновить пост
export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) throw new Error('Пост не найден');
    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Удалить пост
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) throw new Error('Пост не найден');
    res.json({ message: 'Пост удален' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
