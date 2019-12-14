const pushNotifService = require('../push-notif/push-notif.service')

module.exports = {
    createUserSocket,
    sendBookingNotif,
    sendMsgNotif,
    deleteUserSocket
}

let socketMap = {}

function createUserSocket(userId, socket) {
    socketMap[userId] = socket
    console.log(userId, '<KIBEL TZINOR');
}

function sendBookingNotif(notif) {
    if (socketMap[notif.toId]) {
        socketMap[notif.toId].emit('insertUserNotif', notif)
    } else {
        pushNotifService.push(notif.toId, notif)
    }
}

function sendMsgNotif(notif) {
    if (socketMap[notif.toId]) {
        socketMap[notif.toId].emit('insertUserMsg', notif)
        socketMap[notif.toId].emit('insertUserNotif', notif)

    } else {
        pushNotifService.push(notif.toId, notif)
        socketMap[notif.fromId].emit('insertUserNotif', notif)
    }
}

function deleteUserSocket(userId) {
    let isConnected = Object.keys(socketMap).find(key => key === userId)
    if (isConnected) {
        delete socketMap[userId]
        console.log(`Tzinor shel>${userId} de_stroyed`);
    }
}
