import express from 'express';

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));

const port = 3300;

app.get('/', (req, res) => { res.json({success: true}) })

app.listen(port, () => console.log(`server running on port: ${port}`));