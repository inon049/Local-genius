import chatService from '@/services/chat.service'

export default {
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
    actions: {
        async loadChats(context){
        let userId = context.rootState.userStore.loggedInUser._id
        await chatService.query(userId)
        },

        addChat(context,{chat}){
            // chat.guideId 
            // chat.userId 
        },
        sendMsg(context,{chatId,msg}){
            

        }
    }
}
