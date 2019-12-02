'use strict';

import httpService from '@/services/http.service'

//know its duplicated will fix later
async function getGuideReviews(_id) {
    const reviews = await httpService.get(`review/?toGuideId=${_id}`)
    return reviews
}

async function getUserReviews(_id) {
    const reviews = await httpService.get(`review/?byUserId=${_id}`)
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
    getGuideReviews,
    getUserReviews,
    add,
    remove
}