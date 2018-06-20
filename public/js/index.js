var socket = io();
socket.on('connect',function () {
    console.log('connect to server');
    socket.emit('createMessage',{
        "from":"To",
        "text":"What do you want ?",
    });
});

socket.on('disconnect',function () {
    console.log('disconnected from server');
});


socket.on('newMessage',function (message) {
    console.log('New Message: ',message);
});