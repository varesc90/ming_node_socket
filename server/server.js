const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require("socket.io");
const publicPath = path.join(__dirname,'../public');




var app = express();


var server = http.createServer(app);
const port = 3000;
var io = socketIO(server);
app.use(express.static(publicPath));


// io.on('connection', (socket)=>{
//
//
//     socket.emit('newEmail',{
//         "from":"varesc@gmail.com",
//         "text":"Hey What'sup",
//         "createAt":"123"
//     });
//
//     socket.on('createEmail',(email)=>{
//         console.log('create email',email);
//     });
//
//     socket.on('disconnect',()=>{
//         console.log("user disconnected");
//     });
// });

io.on('connection',(socket)=>{

    console.log("new user connected");
    socket.on('createMessage',(message)=>{
        io.emit('newMessage',{
            from:message.from,
            text:message.text,
            createAt:new Date().getTime()
        });
    });



});


server.listen(port,() =>{
    console.log(`Started on port ${port}`);
});

