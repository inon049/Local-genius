'use strict';

import httpService from '@/services/http.service'

//know its duplicated will fix later LOL I WAS ABOUT TO COMMENT duplicate pls fix
//it should be called query like in other services.
async function getGuideBookings(_id){
    const bookings = await httpService.get(`booking/?toGuideId=${_id}`)
    return bookings
}

async function getUserBookings(_id){
    const bookings = await httpService.get(`booking/?byUserId=${_id}`)
    return bookings
}

async function add(booking){
    const bookingConfirm = await httpService.post(`booking`,booking)
    return bookingConfirm
}

export default {
    getGuideBookings,
    getUserBookings,
    add,
}