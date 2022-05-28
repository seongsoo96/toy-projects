const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);
const port = 3000; // 서버를 열 포트 번호



app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


io.on("connection", (socket) => {
});

server.listen(port, () => console.log(`Listening on port ${port}`));