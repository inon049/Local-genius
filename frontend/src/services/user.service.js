'use strict';

import httpService from '@/services/http.service'

const USER_URL = 'user/'

async function query() {
    const users = await httpService.get(USER_URL)
    return users
}

async function getById(_id) {
    const guide = await httpService.get(USER_URL + _id)
    return guide
}
async function addUser(user) {
    const newUser = await httpService.post(USER_URL, user)
    return newUser
}

function getInterests() {
    return [
        { name: "Culture", isSelected: false },
        { name: "Coffee", isSelected: false },
        { name: "Shopping", isSelected: false },
        { name: "Music", isSelected: false },
        { name: "NightLife", isSelected: false },
        { name: "Animals", isSelected: false },
        { name: "OutDoor", isSelected: false },
        { name: "Food", isSelected: false },
        { name: "Photography", isSelected: false },
        { name: "Luxury", isSelected: false },
        { name: "Architecture", isSelected: false },
        { name: "Science", isSelected: false }
    ]
}

export default {
    query,
    getById,
    addUser,
    getInterests
}