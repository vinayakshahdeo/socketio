// using http bcz we are not using express
const http = require("http");
//3rd party module socket.io
const socketio = require ("socket.io");

//creating server

const server = http.createServer((req,res)=>{
    res.end("connected")
})
//socketio piggybacking to server
const io = socketio(server);

io.on("connection",(socket, req)=>{
    console.log("req ", req);
    //send message when anyone connects socket io uses emit
socket.emit("welcome", "welcome to the mancave");

socket.on("message",(msg)=>{
    console.log("msg ", msg )
})
});


//starting server on 8000 dont ask why!!

server.listen(8000);