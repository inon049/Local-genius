const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}

async function getUsers(req, res) {
    // console.log(req.query);
    const users = await userService.query(req.query)
    res.send(users)
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function updateUser(req, res) {
    const user = req.body;
    await userService.update(user)
    res.send(user)
}

async function addUser(req, res) {
    const user = req.body;
    await userService.add(user)
    res.send(user)
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    addUser,
}