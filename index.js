var app = require('express')();
var http = require('http').Server(app);
var readline = require("readline");
var io = require('socket.io')(http);
var five = require("johnny-five");
var board = new five.Board({
  repl: false
});


app.set('port', (process.env.PORT || 3000))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    // print message to arduino
    // var msg = [];
    // display.draw(msg, msg.shift());
  });
});

http.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
