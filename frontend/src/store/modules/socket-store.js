import socket from '@/services/socket.service.js'
import store from '@/store/index'

// socket.emit('test event', 'this is a testing string')
socket.on('userNotif', ({notif}) => {
  store.commit({ type: 'pushToUserNotifs', notif})
})
socket.on('userMsgNotif', function ({ chatId, msg }) {
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
    sendNotif(context, { toId, msg }) {
      let notif = {
        toId, msg
      }
      socket.emit('sendNotif', notif)
    },
    sendMsgNotif(context, {notif}) {
      socket.emit('sendMsgNotif', notif)
    },
  }
}
