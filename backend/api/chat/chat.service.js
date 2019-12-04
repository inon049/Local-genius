
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    remove,
    add,
    addMsg
}

async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('chat')
    try {
        var pipeline = [
            {
                $match: { $or: [ { guideId:ObjectId(filterBy.id) }, { userId: ObjectId(filterBy.id) } ] }
            },
             { $sort: { updatedAt: -1 }} 
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
            chat.user={_id:chat.user._id,name: chat.user.name, imgUrl: chat.user.profileImgUrl }
            chat.guide ={_id:chat.guide._id,name: chat.guide.name, imgUrl: chat.guide.profileImgUrl }
            delete chat.userId;
            delete chat.guideId;
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

function _buildCriteria(filterBy) {
    const criteria = {}
    // console.log(criteria, ' chat crit');
    return criteria;
}
async function addMsg(msg,chatId) {
    msg.sentAt=Date.now()
    const collection = await dbService.getCollection('chat')
    try {
       let chat = await collection.update({ "_id": ObjectId(chatId) },
       {$push: { msgs: msg}},
       { $set: { updatedAt : Date.now() }
    }
       )
       return chat
    } catch (err) {
        console.log(`ERROR: cannot add Msg`)
        throw err;
    }
}



// chatObj
// {
//     "_id":"sadasd",
//     "guideId": "5de3ed727fe0b526944c41ed",
//     "userId": "5de3ed727fe0b526944c41e5",
//     "updatedAt":"1575294204999"
//     "msgs": [
//         {
//             "fromId": "5de3ed727fe0b526944c41ed",
//             "toId": "5de3ed727fe0b526944c41e5",
//             "txt": "i had the best time of my life ty",
//             "sentAt": "1575294204195",
//             "isRead": true
//         },
//         {
//             "fromId": "5de3ed727fe0b526944c41e5",
//             "toId": "5de3ed727fe0b526944c41ed",
//             "txt": "ty i enjoied too",
//             "sentAt": "1575294204999",
//             "isRead": false
//         }
//     ]
// }



// "INCOMINGchat": [
//     {
//         "_id":"5de3ed727fe0b526944c41ed",
//         "updatedAt":"1575294204999",
//         "msgs": [
//             {
//                 "fromId": "5de3ed727fe0b526944c41ed",
//                 "toId": "5de3ed727fe0b526944c41e5",
//                 "txt": "i had the best time of my life ty",
//                 "sentAt": "1575294204195",
//                 "isRead": true
//             },
//             {
//                 "fromId": "5de3ed727fe0b526944c41e5",
//                 "toId": "5de3ed727fe0b526944c41ed",
//                 "txt": "ty i enjoied too",
//                 "sentAt": "1575294204999",
//                 "isRead": false
//             }
//         ],
//         "guide":{
//             "_id":"5de3ed727fe0b526944c41ed",
//             "name":"ff",
//             "imgUrl":"oo"
//         },
//         "user":{
//             "_id":"5de3ed727fe0b526944c41ed",
//             "name":"ff",
//             "imgUrl":"oo"
//         }
//     }
// ],
