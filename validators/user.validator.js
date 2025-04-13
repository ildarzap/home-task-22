import { body } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

// Валидация создания пользователя
export const validateCreateUser = createCustomValidatorMiddleware([
  body('username')
    .notEmpty()
    .withMessage('Имя пользователя обязательно')
    .isLength({ min: 3 })
    .withMessage('Имя пользователя должно содержать минимум 3 символа')
    .trim(),
  body('email')
    .notEmpty()
    .withMessage('Email обязателен')
    .isEmail()
    .withMessage('Некорректный email')
    .normalizeEmail(),
]);

// Валидация обновления пользователя
export const validateUpdateUser = createCustomValidatorMiddleware([
  body('username')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Имя пользователя должно содержать минимум 3 символа')
    .trim(),
  body('email').optional().isEmail().withMessage('Некорректный email').normalizeEmail(),
]);
