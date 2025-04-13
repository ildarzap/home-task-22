import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateCreateUser } from '../validators/user.validator.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', validateCreateUser, createUser);
router.patch('/:id', validateCreateUser, updateUser);
router.delete('/:id', deleteUser);

export default router;
