'use strict';

import httpService from '@/services/http.service'


export default {
    query,
    update,
    add
}


function query(id){
   return httpService.get(`/notif/?id=${id}`)
}


function add(notif){
    return httpService.post('/notif')
}


function update(notif){
    return httpService.put(`/notif/${notif._id}`,notif)
}