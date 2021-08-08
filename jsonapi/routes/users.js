import express from 'express';

import { getUsers, getUser, getUsersTotalPosts } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/user/totalPosts', getUsersTotalPosts);

export default router;