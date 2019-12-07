import socket from '@/services/socket.service.js'
import store from '@/store/index'

// socket.emit('test event', 'this is a testing string')
socket.on('userNotif', ({ msg }) => {
  store.commit({ type: 'pushToUserNotifs', msg })
  console.log('123333');
})
socket.on('userMsgNotif', function ({ chatId, msg }) {
  store.dispatch({ type: 'pushUserMsg', chatId, msg })
})
export default {
  state: {
    userNotifs: []
  },
  getters: {
    userNotifs(state) {
      if (state.userNotifs.length) {
        console.log('blabliblue');
        return state.userNotifs.length
      } else return null
    }
  },
  mutations: {
   
    pushToUserNotifs(state, { txt }) {
      console.log('pushing user notif');
      state.userNotifs.push(txt)
    },
    clearUserNotifs(state) {
      state.userNotifs = []
    }
  },
  actions: {
    ///********* needs to happen after login currently in app.vue created()*********/
    createUserSocket(context) {
      let userId = context.rootGetters.loggedInUser._id
      socket.emit('createUserSocket', userId)
    },
    sendNotif(context, { to, msg }) {
      let notif = {
        to, msg
      }
      socket.emit('sendNotif', notif)
    },
    sendMsgNotif(context, { to, chatId, msg }) {
      let notif = { to, chatId, msg }
      socket.emit('sendMsgNotif', notif)
    },
    clearUserNotifs(context) {
      context.commit('clearUserNotifs')
    }

    // getChatHistory(context, {chatId}) {
    //     socket.emit('getHistory', chatId)
    // }
  }
}
