
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    remove,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('review')
    try {
        var reviews = await collection.aggregate([
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
                    localField: 'aboutGuideId',
                    foreignField: '_id',
                    as: 'aboutGuide'
                }
            },
            {
                $unwind: '$aboutGuide'
            }
        ]).toArray()

        reviews = reviews.map(review => {
            review.byUser = { _id: review.byUser._id, name: review.byUser.name }
            review.aboutUser = { _id: review.aboutGuide._id, name: review.aboutGuide.name }
            delete review.byUserId;
            delete review.aboutGuideId;
            return review;
        })

        return reviews
    } catch (err) {
        console.log('ERROR: cannot find reviews')
        throw err;
    }
}

async function remove(reviewId) {
    const collection = await dbService.getCollection('review')
    try {
        await collection.deleteOne({ "_id": ObjectId(reviewId) })
    } catch (err) {
        console.log(`ERROR: cannot remove review ${reviewId}`)
        throw err;
    }
}

async function add(review) {

    review.byUserId = ObjectId(review.byUserId);
    review.aboutGuideId = ObjectId(review.aboutGuideId);

    const collection = await dbService.getCollection('review')
    try {
        await collection.insertOne(review);
        return review;
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
    if (filterBy.aboutGuideId) {
        criteria.aboutGuideId = ObjectId(filterBy.aboutGuideId)
    }
    return criteria;
}


