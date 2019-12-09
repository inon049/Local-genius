'use strict';

import httpService from '@/services/http.service'

const USER_URL = 'user/'


async function query() {
    const users = await httpService.get(USER_URL)
    return users
}

function update(user) {
    return httpService.put(USER_URL + user._id, user)
}

function add(user){
    return httpService.post(USER_URL,user)
}

async function getById(_id) {
    const guide = await httpService.get(USER_URL + _id)
    return guide
}

async function login(userCred) {
    try {
        const user = await httpService.post('auth/login', userCred)
        if(user) return _handleLogin(user)
    }
    catch (err) {
        console.log(err);
    }
}

async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return _handleLogin(user)
}

async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

export default {
    query,
    getById,
    getInterests,
    login,
    signup,
    logout,
    update,
    add
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
        { name: "Photos", isSelected: false },
        { name: "Luxury", isSelected: false },
        { name: "Architonic", isSelected: false },
        { name: "Science", isSelected: false }
    ]
}