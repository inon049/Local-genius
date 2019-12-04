// const bcrypt = require('bcrypt')
const userService = require('../user/user.service')

const saltRounds = 10

async function login(email, password) {
    if (!email || !password) return Promise.reject('email and password are required!')

    const user = await userService.getByEmail(email)
    if (!user || password !== user.password) return Promise.reject('Invalid email or password')
    // const match = await bcrypt.compare(password, user.password)
    // if (!match) return Promise.reject('Invalid email or password')

    delete user.password;
    return user;
}

async function signup(email, password) {
    if (!email || !password) return Promise.reject('email and password are required!')

    // const hash = await bcrypt.hash(password, saltRounds)
    // return userService.add({email, password: hash})

    return userService.add({ email, password })
}

module.exports = {
    signup,
    login,
}