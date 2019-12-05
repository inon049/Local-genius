import socket from '@/services/socket.service.js'
import store from '@/store/index'

// socket.emit('test event', 'this is a testing string')
socket.on('userNotif', (data) =>{
    console.log(data)
})
socket.on('userMsgNotif', function({chatId,msg}){
    console.log('usernotifmsg in front')
    store.dispatch({type:'pushUserMsg',chatId,msg})
})
export default {
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
    actions: {
      ///********* needs to happen after login currently in app.vue created()*********/
        createUserSocket(context){
          let userId = context.rootGetters.loggedInUser._id
          socket.emit('createUserSocket',userId)
        },
        sendNotif(context, {to,msg}) {
          let notif ={
            to,msg
          }
            socket.emit('sendNotif', notif)
        },
        sendMsgNotif(context,{to,chatId,msg}){
          let notif ={to,chatId,msg}
          socket.emit('sendMsgNotif',notif)
        }
      // getChatHistory(context, {chatId}) {
        //     socket.emit('getHistory', chatId)
        // }
    }
}
