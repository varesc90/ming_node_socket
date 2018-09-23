const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require("socket.io");
const {generateMessage} = require("./utils/message");
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


    socket.emit("newMessage",generateMessage("Admin","Welcome"));

    socket.broadcast.emit("newMessage",generateMessage("Admin","New User Joined"));

    console.log("new user connected");
    socket.on('createMessage',(message,callback) => {
        io.emit('newMessage',generateMessage(message.from,message.text));
        // socket.broadcast.emit('newMessage',{
        //     from:message.from,
        //     text:message.text,
        //     createAt:new Date().getTime()
        // });
        callback("This is from the server");
    });



});


server.listen(port,() =>{
    console.log(`Started on port ${port}`);
});

