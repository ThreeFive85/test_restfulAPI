import express from 'express';

import usersRouter from './jsonapi/routes/users.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));

const port = 3300;

app.get('/', (req, res) => { res.json({success: true}) })

app.use('/users', usersRouter);

app.listen(port, () => console.log(`server running on port: ${port}`));