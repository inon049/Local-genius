'use strict';

import httpService from '@/services/http.service'

export default {
    query,
    update,
    add
}

function query(filterBy){
    //Query all user notifs
    if (filterBy.toId) {
        return httpService.get(`notif/?toId=${filterBy.toId}`)
    }
    //GetById
    if (filterBy._id) {
        console.log(filterBy._id, 'filertetrby id');
        return httpService.get(`notif/?_id=${filterBy._id}`)
    }
}

function add(notif){
    return httpService.post('notif',notif)
}

function update(notif){
    return httpService.put(`notif/${notif._id}`,notif)
}