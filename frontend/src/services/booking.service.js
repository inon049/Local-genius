'use strict';

import httpService from '@/services/http.service'

// get specific values from the bookings db :
// you will need to send a filterBy object 
// to get bookings for specific user  -  _id : <ID>
// to get values for guide  -  isGuide:true  else will be by user
// to get recent  -  recent : 1,
// to get upcoming  -  upcoming : 1,
// to get specific amount  -   amount : <AMOUNT>

async function query(filterBy = {}) {
    var queryUrl = ``

    if (!filterBy._id) queryUrl += ``
    else if (filterBy.isGuide) queryUrl += `toGuideId=${filterBy._id}&`
    else queryUrl += `byUserId=${filterBy._id}&`

    for (const param in filterBy) {
        queryUrl += `${param}=${filterBy[param]}&`
    }
    const bookings = await httpService.get(`booking/?${queryUrl}`)
    return bookings
}

async function add(booking) {
    const bookingConfirm = await httpService.post(`booking`, booking)
    return bookingConfirm
}

export default {
    query,
    add,
}