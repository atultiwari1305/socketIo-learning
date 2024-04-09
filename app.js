const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const server = http.createServer(app);
const socketIO = require('socket.io');

//initializing socket io by passing the HTTP server instance
const io = socketIO(server);

io.on('connection',socket=>{
    //you can handle socket events here
    // console.log(socket.id);
    console.log("User is connected");

    socket.on('disconnect',()=>{
        console.log("User is disconnected");
    })

    socket.on('message',msg=>{
        console.log("Client Message: "+msg);
    })
})



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"src","app.html"));
})

server.listen(3000);