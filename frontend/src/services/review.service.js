'use strict';

import httpService from '@/services/http.service'

// get specific values from the reviews db :
// you will need to send a filterBy object 
// to get reviews for specific user  -  _id : <ID>
// to get values for guide  -  isGuide:true  else will be by user
// to get recent  -  recent : 1,
// to get specific amount  -   amount : <AMOUNT>

async function query(filterBy = {}) {
    var queryUrl = ``

    if (!filterBy._id) queryUrl += ``
    else if (filterBy.isGuide) queryUrl += `aboutGuideId=${filterBy._id}&`
    else queryUrl += `byUserId=${filterBy._id}&`

    for (const param in filterBy) {
        queryUrl += `${param}=${filterBy[param]}&`
    }
    const reviews = await httpService.get(`review/?${queryUrl}`)
    return reviews
}

async function add(review) {
    const reviewConfirm = await httpService.post(`review`, review)
    return reviewConfirm
}

async function remove(reviewId) {
    const removeConfirm = await httpService.delete(`review`, reviewId)
    return removeConfirm
}


export default {
    query,
    add,
    remove
}