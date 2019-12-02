'use strict';

import httpService from '@/services/http.service'

const USER_URL = 'user/'

async function query() {
    const users = await httpService.get(USER_URL)
    return users
}

async function getGuideById(_id) {
    const guide = await httpService.get(USER_URL + _id)
    return guide
}

async function addUser(user) {
    const newUser = await httpService.post(USER_URL, user)
    return newUser
}

export default {
    query,
    getGuideById,
    addUser
}