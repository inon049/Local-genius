
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
        var pipeline = [
            {
                $match: criteria
            },
            (filterBy.recent) ? { $sort: { createdAt: -1 } } :
                { $unwind: { path: '$pp', preserveNullAndEmptyArrays: true } },
            (filterBy.amount) ? { $limit: +filterBy.amount } :
                { $unwind: { path: '$pp', preserveNullAndEmptyArrays: true } },
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
        ]

        var reviews = await collection.aggregate(pipeline).toArray()

        reviews = reviews.map(review => {
            review.byUser = { _id: review.byUser._id, name: review.byUser.name, imgUrl: review.byUser.profileImgUrl }
            review.aboutGuide = { _id: review.aboutGuide._id, name: review.aboutGuide.name }
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
        console.log(`ERROR: cannot insert reivew`)
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
    console.log(criteria, ' review crit');
    return criteria;
}


