const express = require('express');
const path = require('path');
const rateLimiter = require('./middlewares/rateLimit');

const app = express();

const { PORT = 3000 } = process.env;
const pathName = path.join(__dirname, '../dist/index.html');

app.use(express.static('./dist'));

app.use(rateLimiter);

app.get('/*', (req, res) => {
  res.sendFile(pathName);
});

app.listen(PORT);
