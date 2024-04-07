const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{cors: {origin: "http://localhost:5173"}});
const {onDisconnect, onMessage} = require('./tools')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(socket.id)

  socket.on("disconnect",()=>onDisconnect());
  socket.on("message",(message,userName)=>onMessage(message,userName,socket, io.emit.bind(io)))
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});


