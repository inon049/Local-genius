import socket from '@/services/socket.service.js'
import store from '@/store/index'

// socket.emit('test event', 'this is a testing string')
socket.on('insertUserNotif', (notif) => {
  console.log(notif, 'from socket');
  store.dispatch({type:'loadNotifs'})
  store.dispatch({ type: 'pushToUserNotifs', notif})
})
socket.on('insertUserMsg', function ({ chatId, msg }) {
  console.log('chatid>',chatId,'msg>',msg);
  store.dispatch({ type: 'pushUserMsg', chatId, msg })
})
export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    createUserSocket(context) {
      let userId = context.rootGetters.loggedInUser._id
      socket.emit('createUserSocket', userId)
    },
    sendNotif(context, { notif }) {
      socket.emit('sendNotif', notif)
    },
    sendMsgNotif(context, {notif}) {
      socket.emit('sendMsgNotif', notif)
    },
  }
}
