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
app.use('/tiersIncluded', proxy('localhost:3101', {
  proxyReqPathResolver: function (req) {
    let pieces = req.url.split('?');
    let pathname = pieces[0];
    let queryString = pieces[1];
    if (!queryString) {
      return '';
    } else {
      return `${pathname}?${queryString}`;
    }
  }
}));
app.use('/itemsIncluded', proxy('localhost:3101', {
  proxyReqPathResolver: function (req) {
    let pieces = req.url.split('?');
    let pathname = pieces[0];
    let queryString = pieces[1];
    if (!queryString) {
      return '';
    } else {
      return `${pathname}?${queryString}`;
    }
  }
}));

//Bonuses service
app.use('/bonus-track', proxy('localhost:3031', {
  proxyReqPathResolver: function (req) {
    let pieces = req.url.split('?');
    let pathname = pieces[0];
    let queryString = pieces[1];
    if (!queryString) {
      return '';
    } else {
      return `${pathname}?${queryString}`;
    }
  }
}));
app.use('/bonus-title', proxy('localhost:3031', {
  proxyReqPathResolver: function (req) {
    let pieces = req.url.split('?');
    let pathname = pieces[0];
    let queryString = pieces[1];
    if (!queryString) {
      return '';
    } else {
      return `${pathname}?${queryString}`;
    }
  }
}));
app.use('/bonus', proxy('localhost:3031', {
  proxyReqPathResolver: function (req) {
    let pieces = req.url.split('?');
    let pathname = pieces[0];
    let queryString = pieces[1];
    if (!queryString) {
      return '';
    } else {
      return `${pathname}?${queryString}`;
    }
  }
}));

//Description service
app.use('/bundleInfo', proxy('localhost:3663'));



module.exports = app;
