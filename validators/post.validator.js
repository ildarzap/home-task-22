import { body } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

// Валидация создания поста
export const validateCreatePost = createCustomValidatorMiddleware([
  body('title')
    .notEmpty()
    .withMessage('Заголовок обязателен')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Заголовок должен содержать минимум 3 символа'),
  body('content').notEmpty().withMessage('Контент обязателен').trim(),
  body('author').notEmpty().withMessage('Автор обязателен'),
]);

// Валидация обновления поста
export const validateUpdatePost = createCustomValidatorMiddleware([
  body('title')
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Заголовок должен содержать минимум 3 символа'),
  body('content').optional().trim(),
]);
