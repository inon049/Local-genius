module.exports = connectSockets

let socketMap= {

}

function connectSockets(io) {
    io.on('connection', socket => {    
        socket.on('createUserSocket', userId =>{
            socketMap[userId] =socket
        })
        socket.on('sendNotif', notif =>{
           socketMap[notif.to].emit('userNotif',notif.msg)
        })

 // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            // io.to(socket.myTopic).emit('chat addMsg', msg)
        // socket.on('chat topic', topic=>{
        //     if (socket.myTopic) {
        //         socket.leave(socket.myTopic)
        //     }
        //     socket.join(topic)
        //     socket.myTopic = topic;
        // })
    })
}