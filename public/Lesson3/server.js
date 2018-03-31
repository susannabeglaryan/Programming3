var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("Lesson2"));

app.get("/", function (req, res) {
    res.redirect("/Lesson2/index.html");
});

server.listen(3000);
