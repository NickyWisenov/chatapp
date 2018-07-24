var express = require('express');
var socket = require('socket.io');

var app = express();

server = app.listen(8080, function () {
    console.log('Server is running at the localhost:8080');
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data) {
        io.emit('RECEIVE_MESSAGE', data);
    })
}) 