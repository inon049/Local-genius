
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    remove,
    add,
    update
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('notif')

    var pipeline = [
        {
            $match: criteria
        },
        { $sort: { createdAt: -1 } }
        ,
        {
            $lookup:
            {
                from: 'user',
                localField: 'toId',
                foreignField: '_id',
                as: 'to'
            }
        },
        {
            $unwind: '$to'
        },
        {
            $lookup:
            {
                from: 'user',
                localField: 'fromId',
                foreignField: '_id',
                as: 'from'
            }
        },
        {
            $unwind: '$from'
        }
    ]
    if (filterBy.amount) pipeline.splice(2, 0, { $limit: +filterBy.amount })
    try {
        var notifs = await collection.aggregate(pipeline).toArray()
        notifs = notifs.map(notif => {
            notif.from = { _id: notif.from._id, name: notif.from.name, imgUrl: notif.from.profileImgUrl }
            notif.to = { _id: notif.to._id, name: notif.to.name, imgUrl: notif.to.profileImgUrl }
            delete notif.fromId;
            delete notif.toId;
            return notif;
        })
        return notifs
    } catch (err) {
        console.log('ERROR: cannot find notifs')
        throw err;
    }
}

async function remove(notifId) {
    const collection = await dbService.getCollection('notif')
    try {
        await collection.deleteOne({ "_id": ObjectId(notifId) })
    } catch (err) {
        console.log(`ERROR: cannot remove notif ${notifId}`)
        throw err;
    }
}

async function add(notif) {

    notif.toId = ObjectId(notif.toId);
    notif.fromId = ObjectId(notif.fromId);

    const collection = await dbService.getCollection('notif')
    try {
     const addedNotif = await collection.insertOne(notif);
        return addedNotif;
    } catch (err) {
        console.log(`ERROR: cannot insert notification`)
        throw err;
    }
}

async function update(notif) {
    const collection = await dbService.getCollection('notif')
    try {
        const strId = notif._id
        const _id = ObjectId(strId)
        const newIsRead = notif.isRead
        await collection.updateOne({ _id }, { $set: { isRead: newIsRead } })
        return notif
    } catch (err) {
        console.log(`ERROR: cannot update notif ${notif._id}`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.toId) {
        criteria.toId = ObjectId(filterBy.toId)
    }
    if (filterBy._id) {
        criteria._id = ObjectId(filterBy._id)
    }
    return criteria;
}
