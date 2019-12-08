import notifService from '@/services/notif.service'

export default {
    state: {
        notifs:[]
           },
    getters: {
        notifs(state){
            return state.notifs
        },
        
    },
    mutations: {
        setNotifs(state,{notifs}){
            state.notifs = notifs
        },
        updateNotif(state,{updatedNotif}){
            let idx= state.notifs.findIndex(notif=>notif._id===updatedNotif._id)
        },
        addNotif(state,{addedNotif}){
            state.notifs.push(addedNotif)
        }
    },
    actions: {
        async addNotif(context,{notif}){
            const addedNotif = await notifService.add(notif)
            console.log(addedNotif,'addedNotif<<');
            context.commit({type:'addNotif',addedNotif})   
          },


        async updateNotif(context,{notif}){
            const updatedNotif = await notifService.update(notif)
            context.commit({type:'updateNotif',updatedNotif})   
          },

        async loadNotifs(context){
            let id = context.rootGetters.loggedInUser._id;
            let notifs = await notifService.query(id)
            console.log('in loadBotifs',notifs);
            context.commit({type:'setNotifs',notifs})
        }

    },
  }