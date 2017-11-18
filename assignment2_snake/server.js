const path = require('path');
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

// static files
app.use('/dist', express.static('dist'))
app.use('/src', express.static('src'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  players[socket.id] = {}

  socket.on('/INIT_MULTI', () => {
    for (let id in players) {
      if (id !== socket.id) {
        io.emit('/INIT_MULTI')
      }
    }
  })

  socket.on('player-press-enter', function(value){
    console.log('some player emits a random number: ', value);
    io.emit('player-press-enter', value);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});