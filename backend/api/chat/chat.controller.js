const chatService = require('./chat.service')

async function getChats(req, res) {
    const chats = await chatService.query(req.params.id)
    res.send(chats)
}

async function deleteChat(req, res) {
    await chatService.remove(req.params.id)
    res.end()
}
async function addMsg(req,res){
    let msg = req.body;
    let chatId = req.params.id
    msg = await chatService.addMsg(msg,chatId)
    res.send(msg)
    
}


async function addChat(req, res) {
    let chat = req.body;
    chat.msgs=[]
    chat.createdAt=Date.now()
    chat = await chatService.add(chat)
    res.send(chat)
}

module.exports = {
    getChats,
    deleteChat,
    addChat,
    addMsg
}