var socket = io();
socket.on('connect',function () {
    console.log('connect to server');
    socket.emit('createMessage',{
        "from":"To",
        "text":"What do you want ?"
    },function() {
        console.log('Got it');
    });
});

socket.on('disconnect',function () {
    console.log('disconnected from server');
});


socket.on('newMessage',function (message) {
    console.log('New Message: ',message);
    var li = jQuery('<li></li>');
    li.text(`${message.from} : ${message.text}`);
    jQuery("#messages").append(li);
});

socket.emit('createMessage',{
    from:'Ming',
    text:'hello'
}, function(data){
    console.log('Got it');
    console.log(data);
});

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage',{
        from:'Ming',
        text:jQuery('[name="message"]').val()
    }, function(data){
        console.log('Got it');
        console.log(data);
    });
});