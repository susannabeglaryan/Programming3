var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coordinateX = [];
var coordinateY = [];

app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);


io.on('connection', function (socket) {
  for (var i in coordinateX) {
    io.sockets.emit("display drawing", [coordinateX[i], coordinateY[i]]);
  }
  socket.on("send drawing", function (coordinates) {
    coordinateX.push(coordinates.x);
    coordinateY.push(coordinates.y);
    io.sockets.emit("display drawing", coordinates);
  })
});
