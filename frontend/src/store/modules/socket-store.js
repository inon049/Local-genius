import socket from '@/services/socket.service.js'

// socket.emit('test event', 'this is a testing string')
// socket.on('saying to all', (data) =>{
//     console.log(data)
// })
export default {
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
    actions: {
        sendMsg(context, {msg}) {
            socket.emit('sendMsg', msg)
        },
        getChatHistory(context, {chatId}) {
            socket.emit('getHistory', chatId)
        }
    }
}