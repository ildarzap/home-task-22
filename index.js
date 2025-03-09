import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import 'dotenv/config';

const app = express();
const PORT = 3000;
const connectionString = process.env.DB_URL;

async function connectDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Подключено к базе данных!');
  } catch (error) {
    console.log('Error!');
  }
}

app.use(express.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
