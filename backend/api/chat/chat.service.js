
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    remove,
    add,
    addMsg,
    update
}

async function query(filterBy = {}) {
    const collection = await dbService.getCollection('chat')
    try {
        var pipeline = [
            {
                $match: { $or: [{ guideId: ObjectId(filterBy.id) }, { userId: ObjectId(filterBy.id) }] }
            },
            { $sort: { updatedAt: -1 } }
            ,
            (filterBy.amount) ? { $limit: +filterBy.amount } :
                { $unwind: { path: '$pp', preserveNullAndEmptyArrays: true } },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'guideId',
                    foreignField: '_id',
                    as: 'guide'
                }
            },
            {
                $unwind: '$guide'
            },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            }
        ]

        var chats = await collection.aggregate(pipeline).toArray()
        chats = chats.map(chat => {
            chat.user = { _id: chat.user._id, name: chat.user.name, imgUrl: chat.user.profileImgUrl }
            chat.guide = { _id: chat.guide._id, name: chat.guide.name, imgUrl: chat.guide.profileImgUrl }
            delete chat.userId;
            delete chat.guideId;
            chat.msgs.sort((a, b) => {
                if (a.createdAt > b.createdAt) return 1
                if (a.createdAt < b.createdAt) return -1
                else return 0
            })
            return chat;
        })
        return chats
    } catch (err) {
        console.log('ERROR: cannot find chats')
        throw err;
    }
}


async function remove(chatId) {
    const collection = await dbService.getCollection('chat')
    try {
        await collection.deleteOne({ "_id": ObjectId(chatId) })
    } catch (err) {
        console.log(`ERROR: cannot remove chat ${chatId}`)
        throw err;
    }
}

async function add(chat) {

    chat.guideId = ObjectId(chat.guideId);
    chat.userId = ObjectId(chat.userId);

    const collection = await dbService.getCollection('chat')
    try {
        await collection.insertOne(chat);
        return chat;
    } catch (err) {
        console.log(`ERROR: cannot insert reivew`)
        throw err;
    }
}

async function update(chat) {
    const collection = await dbService.getCollection('chat')
    try {
        const msgs = chat.msgs
        const strId = chat._id
        const _id = ObjectId(strId)
        await collection.updateOne({ _id }, { "$set":{ msgs }})
        return chat
    } catch (err) {
        console.log(`ERROR: cannot update chat ${chat._id}`)
        throw err;
    }
}

async function addMsg(msg, chatId) {
    msg.sentAt = Date.now()
    console.log(chatId);
    const collection = await dbService.getCollection('chat')
    chatId = ObjectId(chatId)
    try {
        let chat = await collection.update({ "_id": chatId },
            { $push: { msgs: msg } },
            {
                $set: { updatedAt: Date.now() }
            }
        )
        return chat
    } catch (err) {
        console.log(`ERROR: cannot add Msg`)
        throw err;
    }
}
