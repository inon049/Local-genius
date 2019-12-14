import chatService from '@/services/chat.service'

export default {
    state: {
        chats:[],
        currChat:null
    },
    getters: {
        chats(state){
            return state.chats
        },
        currChat(state){
            return state.currChat
        }
    },
    mutations: {
        setChats(state,{chats}){
            state.chats = chats
        },
        pushChatMsg(state,{chatId,msg}){
            let idx = state.chats.findIndex(chat=>chat._id===chatId)
            state.chats[idx].msgs.push(msg)
        },
        selectChat(state,{chatId}){
            let chat= state.chats.find(chat=>chat._id===chatId)
            state.currChat = chat
        }
    },
    actions: {
        pushUserMsg(context,{msg,chatId}){
            context.commit({type:'pushChatMsg',msg,chatId})
        },
        createChat(context,{chat}){
            chatService.createChat(chat)
        },
        async sendMsg(context,{chatId,msg}){
            await chatService.addMsg(chatId,msg)
            context.commit({type:'pushChatMsg',msg,chatId})
            let notif = {
                type:'msg',
                toId:msg.toId,
                fromId:msg.fromId,
                chatId,
                msg,
                isRead:false,
                txt:'New chat messege'
            }
          var addedNotif =  await context.dispatch({type:'addNotif',notif})
            context.dispatch({type:'sendMsgNotif',notif:addedNotif.ops[0]})
        },
        selectChat(context,{chatId}){
            context.commit({type:'selectChat',chatId})
        },
        async loadChats(context){
            let id = context.rootGetters.loggedInUser._id;
            let chats = await chatService.query(id)
            context.commit({type:'setChats',chats})
        }
    }
}
