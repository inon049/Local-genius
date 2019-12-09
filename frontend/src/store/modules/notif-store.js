import notifService from '@/services/notif.service'
import { stat } from 'fs'

export default {
    state: {
        notifs:[]
           },
    getters: {
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
            state.notifs.splice(idx,1,updatedNotif)
        },
        pushToUserNotifs(state,{notif}){
            state.notifs.push(notif)
        }

    },
    actions: {
       addNotif(context,{notif}){
            return notifService.add(notif)
          },
        async updateNotif(context,{notif}){
            const updatedNotif = await notifService.update(notif)
            context.commit({type:'updateNotif',updatedNotif})   
          },

        async loadNotifs(context){
            let id = context.rootGetters.loggedInUser._id;
            let notifs = await notifService.query({toId:id})
            context.commit({type:'setNotifs',notifs})
        },
        async pushToUserNotifs(context,{notif}){
            let formattedNotif = await notifService.query({_id:notif._id})
            context.commit({type:'pushToUserNotifs',notif:formattedNotif[0]})
        }

    },
  }