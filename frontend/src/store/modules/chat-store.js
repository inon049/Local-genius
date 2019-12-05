import chatService from '@/services/chat.service'

export default {
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
    actions: {
        createChat(context,{chat}){
            console.log(chat);
            // chat.guideId 
            // chat.userId 
        },
        sendMsg(context,{chatId,msg}){
            

        }
    }
}
