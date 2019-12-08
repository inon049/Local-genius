'use strict';

import httpService from '@/services/http.service'


export default {
    query,
    update,
    add
}


function query(id){
    console.log('id in query',id);
   return httpService.get(`notif/?toId=${id}`)
}


function add(notif){
    return httpService.post('notif',notif)
}


function update(notif){
    return httpService.put(`notif/${notif._id}`,notif)
}