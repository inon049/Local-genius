import chatService from '@/services/chat.service'

export default {
    state: {
        chats:[]
    },
    getters: {
        chats(state){
            return state.chats
        }
    },
    mutations: {
        setChats(state,{chats}){
            state.chats = chats
        }
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
