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
    try {
        var bookings = await collection.aggregate([
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
            }
        ]).toArray()

        bookings = bookings.map(booking => {
            booking.byUser = { _id: booking.byUser._id, name: booking.byUser.name,imgUrl:booking.byUser.profileImgUrl }
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
        criteria.price = +filterBy.price
    }
    console.log(criteria, ' booking crit');
    return criteria;

}
