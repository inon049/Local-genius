'use strict';

import httpService from '@/services/http.service'

async function query(){
    const users = await httpService.get('user')
    return users
}

async function getGuideById(_id){
    console.log('service');
    const guide = await httpService.get(`user/${_id}`)
    return guide
}

export default {
    query,
    getGuideById
}