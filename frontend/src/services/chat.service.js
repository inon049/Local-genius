'use strict';
import httpService from '@/services/http.service'


export default {
    query,
    addChat,
    addMsg,
}

async function query(chatId){
    const msgs = await httpService.get(`chat/${chatId}`)
    return msgs
}

async function addChat(chat){

}
async function addMsg(){
    
}router.post('/:id', addMsg)