const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const PORT = 3103;
const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(PORT, () => {
  console.log('listening at port ', PORT);
});

//Bonuses service
// app.use('/bonus-track', proxy('http://localhost:3031', {
//   proxyReqPathResolver: function (req) {
//     let pieces = req.url.split('?');
//     let pathname = pieces[0];
//     let queryString = pieces[1];
//     if (!queryString) {
//       return '';
//     } else {
//       return `${pathname}?${queryString}`;
//     }
//   }
// }));
// app.use('/bonus-title', proxy('http://localhost:3031', {
//   proxyReqPathResolver: function (req) {
//     let pieces = req.url.split('?');
//     let pathname = pieces[0];
//     let queryString = pieces[1];
//     if (!queryString) {
//       return '';
//     } else {
//       return `${pathname}?${queryString}`;
//     }
//   }
// }));
// app.use('/bonus', proxy('http://localhost:3031', {
//   proxyReqPathResolver: function (req) {
//     let pieces = req.url.split('?');
//     let pathname = pieces[0];
//     let queryString = pieces[1];
//     if (!queryString) {
//       return '';
//     } else {
//       return `${pathname}?${queryString}`;
//     }
//   }
// }));

//Description service
// app.use('/bundleInfo', proxy('http://localhost:3663'));



module.exports = app;
