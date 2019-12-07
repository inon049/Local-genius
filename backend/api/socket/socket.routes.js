module.exports = connectSockets

let socketMap= {

}
function connectSockets(io) {
    io.on('connection', socket => {    
        socket.on('createUserSocket', userId =>{
            socketMap[userId] = socket
            console.log(userId,'<socketmap connection');
        })
        socket.on('sendNotif', notif =>{
            console.log(notif,'noifcation ');
            if(socketMap[notif.to])
           socketMap[notif.to].emit('userNotif',notif.msg)
        })
        socket.on('sendMsgNotif', notif =>{
            console.log(notif,'<<<chat msg noifcation');
            if(socketMap[notif.to])
           socketMap[notif.to].emit('userMsgNotif',notif)
        })
    })
}