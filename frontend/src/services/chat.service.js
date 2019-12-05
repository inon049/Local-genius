'use strict';
import httpService from '@/services/http.service'


export default {
    query,
    addChat,
    addMsg,
}

async function query(id){
    const chats = await httpService.get(`chat/?id=${id}`)
    return chats
}

async function addChat(chat) {

}
async function addMsg(){
    
}
// router.post('/:id', addMsg)
