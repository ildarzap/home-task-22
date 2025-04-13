import { body } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

export const commentValidator = createCustomValidatorMiddleware([
  body('user').notEmpty().withMessage('Поле user обязательно'),
  body('text').isLength({ min: 1 }).withMessage('Комментарий не может быть пустым'),
]);
