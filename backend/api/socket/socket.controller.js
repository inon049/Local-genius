const socketService = require('./socket.service')

module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('createUserSocket', (userId) => {
            socketService.createUserSocket(userId, socket)
        })
        socket.on('sendBookingNotif', socketService.sendBookingNotif)
        socket.on('sendMsgNotif', socketService.sendMsgNotif)
        socket.on('deleteUserSocket', socketService.deleteUserSocket)
    })
}