'use strict';

import httpService from '@/services/http.service'

//know its duplicated will fix later
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