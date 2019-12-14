'use strict';
import httpService from '@/services/http.service'


export default {
    query,
    createChat,
    addMsg,
    updateChat,
}

async function query(id) {
    const chats = await httpService.get(`chat/?id=${id}`)
    return chats
}

async function createChat(chat) {
    let newChat = await httpService.post('chat/', chat)
    console.log(newChat);
    return newChat
}
function addMsg(id, msg) {
    return httpService.post(`chat/${id}`, msg)
}
async function updateChat(chat) {
    let newChat = await httpService.put('chat/', chat)
    return newChat
}
