const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    remove,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('booking')

    var pipeline = [
        {
            $match: criteria
        },
        {
            $lookup:
            {
                from: 'user',
                localField: 'byUserId',
                foreignField: '_id',
                as: 'byUser'
            }
        },
        {
            $unwind: '$byUser'
        },
        {
            $lookup:
            {
                from: 'user',
                localField: 'toGuideId',
                foreignField: '_id',
                as: 'toGuide'
            }
        },
        {
            $unwind: '$toGuide'
        },
    ]

    if (filterBy.amount) pipeline.splice(1, 0, { $limit: +filterBy.amount })
    if (filterBy.recent) pipeline.splice(1, 0, { $sort: { createdAt: -1 } })
    if (filterBy.upcoming) pipeline.splice(1, 0, { $sort: { at: 1 } })

    try {

        var bookings = await collection.aggregate(pipeline).toArray()

        bookings = bookings.map(booking => {
            booking.byUser = { _id: booking.byUser._id, name: booking.byUser.name, imgUrl: booking.byUser.profileImgUrl }
            booking.toGuide = { _id: booking.toGuide._id, name: booking.toGuide.name }
            delete booking.byUserId;
            delete booking.toGuideId;
            return booking;
        })
        return bookings
    } catch (err) {
        console.log('ERROR: cannot find bookings')
        throw err;
    }
}

async function remove(bookingId) {
    const collection = await dbService.getCollection('booking')
    try {
        await collection.deleteOne({ "_id": ObjectId(bookingId) })
    } catch (err) {
        console.log(`ERROR: cannot remove booking ${bookingId}`)
        throw err;
    }
}

async function add(booking) {

    booking.byUserId = ObjectId(booking.byUserId);
    booking.toGuideId = ObjectId(booking.toGuideId);

    const collection = await dbService.getCollection('booking')
    try {
        await collection.insertOne(booking);
        return booking;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};

    if (filterBy.byUserId) {
        criteria.byUserId = ObjectId(filterBy.byUserId)
    }
    if (filterBy.toGuideId) {
        criteria.toGuideId = ObjectId(filterBy.toGuideId)
    }
    if (filterBy.price) {
        criteria.price = { $gte: +filterBy.price }
    }
    if (filterBy.upcoming) {
        criteria.at = { $gte: Date.now() }
    }
    // console.log(criteria, ' booking crit');
    return criteria;
}