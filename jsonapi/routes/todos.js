import express from 'express';

import { getTodos } from '../controllers/todos.js';

const router = express.Router();

router.get('/', getTodos);

export default router;