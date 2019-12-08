module.exports = connectSockets

let socketMap= {

}
function connectSockets(io) {
    io.on('connection', socket => {    
        socket.on('createUserSocket', userId =>{
            socketMap[userId] = socket
            console.log(userId,'<KIBEL TZINOR');
        })
        socket.on('sendNotif', notif =>{
            console.log(notif.toId,'<<<<noifcation ');
            if(socketMap[notif.toId])
           socketMap[notif.toId].emit('insertUserNotif',notif)
        })
        socket.on('sendMsgNotif', notif =>{
            if(socketMap[notif.toId]){
                socketMap[notif.toId].emit('insertUserMsg',notif)
                socketMap[notif.toId].emit('insertUserNotif',notif)
            }
        })
    })
}