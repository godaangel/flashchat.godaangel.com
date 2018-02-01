var express = require('express');
var router = express.Router();

const http = require('http');
const url = require('url');
const WebSocket = require('ws');

var app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: '/chat' });
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  
  wss.on('connection', function connection(ws, req) {
    const location = url.parse(req.url, true);
    // You might use location.query.access_token to authenticate or share sessions
    // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

    ws.on('message', function incoming(message) {
      wss.clients.forEach(function each(client) {
        client.send(message);
      });
      console.log('received: %s', message);
    });

    // ws.send('something');
  });
});

module.exports = router;
