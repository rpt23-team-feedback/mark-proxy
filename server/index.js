const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const PORT = 3103;
const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

app.use(express.urlencoded({
  extended: true,
}));

app.use('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(PORT, () => {
  console.log('listening at port ', PORT);
});

module.exports = app;
