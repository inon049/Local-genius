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
        async loadChats(context){
        let userId = context.rootState.userStore.loggedInUser._id
        let chats = await chatService.query(userId)
        console.log(chats,'from store after query');
        context.commit({type:'setChats',chats})
        },

        addChat(context,{chat}){
            chat.guideId 
            chat.userId 
        },
        sendMsg(context,{chatId,msg}){
            

        }
    }
}
