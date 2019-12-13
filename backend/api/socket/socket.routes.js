const pushNotifService = require('../push-notif/push-notif.service') 

module.exports = connectSockets

let socketMap= {

}
function connectSockets(io) {
    io.on('connection', socket => {    
        socket.on('createUserSocket', userId =>{
            socketMap[userId] = socket
            console.log(userId,'<KIBEL TZINOR');
        })
        socket.on('sendBookingNotif', notif =>{
            if(socketMap[notif.toId]){
                socketMap[notif.toId].emit('insertUserNotif',notif)
            }else{
                pushNotifService.push(notif.toId,notif)
            }
        })
        socket.on('sendMsgNotif', notif =>{
            if(socketMap[notif.toId]){
                socketMap[notif.toId].emit('insertUserMsg',notif)
                socketMap[notif.toId].emit('insertUserNotif',notif)
            }else{
                pushNotifService.push(notif.toId,notif)
            }
        })
        socket.on('deleteUserSocket',userId=>{
            let isConnected = Object.keys(socketMap).find(key =>key===userId)
            if (isConnected) {
                delete socketMap[userId]
                console.log(`Tzinor shel>${userId} de_stroyed`);
            }
        })
        

    })
}