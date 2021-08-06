import express from 'express';

import usersRouter from './jsonapi/routes/users.js';
import postsRouter from './jsonapi/routes/posts.js';
import todosRouter from './jsonapi/routes/todos.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));

const port = 3300;

app.get('/', (req, res) => { res.json({success: true}) })

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/todos', todosRouter);

app.listen(port, () => console.log(`server running on port: ${port}`));