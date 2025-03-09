import User from '../models/User.js';

// Получить всех пользователей
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Создать пользователя
export const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = new User({ username, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Обновить пользователя
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) throw new Error('Пользователь не найден');
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Удалить пользователя
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) throw new Error('Пользователь не найден');
    res.json({ message: 'Пользователь удален' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
