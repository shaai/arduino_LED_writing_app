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
  });
});

http.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

// when the board is ready, execute this code
board.on("ready", function() {

  var display = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }
  });

  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      var messageArray = msg.split("");
      for (var i = 0; i < messageArray.length; i++) {
        display.draw(0, messageArray[i]);
      }
    });
  });

  display.on();

});
