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
    for(var i in coordinateX) {
      io.sockets.emit("display drawing", coordinateX[i]);
    } 
    for(var i in coordinateY) {
        io.sockets.emit("display drawing", coordinateY[i]);
      }
    socket.on("send drawing", function (data) {
        coordinateX.push(data);
        coordinateY.push(data);
        io.sockets.emit("display drawing", data);
    })
 });
 