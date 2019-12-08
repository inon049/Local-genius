import socket from '@/services/socket.service.js'
import store from '@/store/index'

// socket.emit('test event', 'this is a testing string')
socket.on('insertUserNotif',(notif) => {
  store.dispatch({ type: 'pushToUserNotifs', notif})
})
socket.on('insertUserMsg', function ({ chatId, msg }) {
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
    sendBookingNotif(context, { notif }) {
      socket.emit('sendBookingNotif', notif)
    },
    sendMsgNotif(context, {notif}) {
      socket.emit('sendMsgNotif', notif)
    },
  }
}
