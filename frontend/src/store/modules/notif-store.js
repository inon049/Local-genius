import notifService from '@/services/notif.service'
import { stat } from 'fs'

export default {
    state: {
        notifs:[]
           },
    getters: {
        notifs(state){
            return state.notifs
        },
        unReadNotifs(state){
            return state.notifs.filter(notif=>!notif.isRead)
        }
        
    },
    mutations: {
        setNotifs(state,{notifs}){
            state.notifs = notifs
        },
        updateNotif(state,{updatedNotif}){
            let idx= state.notifs.findIndex(notif=>notif._id===updatedNotif._id)
            state.notifs[idx]=updatedNotif
        },
        pushToUserNotifs(state,{notif}){
            state.notifs.push(notif)
        }

    },
    actions: {
       addNotif(context,{notif}){
             notifService.add(notif)
          },
        async updateNotif(context,{notif}){
            const updatedNotif = await notifService.update(notif)
            context.commit({type:'updateNotif',updatedNotif})   
          },

        async loadNotifs(context){
            let id = context.rootGetters.loggedInUser._id;
            let notifs = await notifService.query(id)
            context.commit({type:'setNotifs',notifs})
        },
        pushToUserNotifs(context,{notif}){
            context.commit({type:'pushToUserNotifs',notif})
        }

    },
  }