'use strict';

import httpService from '@/services/http.service'

async function query(){
    const users = await httpService.get('user')
    return users
}

async function getById(_id){    
    const guide = await httpService.get(`user/${_id}`)
    return guide
}



export default {
    query,
    getById
}