const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const PORT = 3103;
const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(PORT, () => {
  console.log('listening at port ', PORT);
});

app.use('/tiersIncluded', proxy('localhost:3101'));

module.exports = app;
