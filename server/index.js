const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const PORT = 3103;
const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(PORT, () => {
  console.log('listening at port ', PORT);
});

//Tiers service
app.use('/tiersIncluded', proxy('localhost:3101'));
app.use('/itemsIncluded', proxy('localhost:3101'));

//Bonuses service
app.use('/bonus-track', proxy('localhost:3031'));
app.use('/bonus-title', proxy('localhost:3031'));
app.use('/bonus', proxy('localhost:3031'));


module.exports = app;
