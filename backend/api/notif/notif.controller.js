const notifService = require('./notif.service')

async function getNotifs(req, res) {
    const notifs = await notifService.query(req.query)
    res.send(notifs)
}

async function deleteNotif(req, res) {
    await notifService.remove(req.params.id)
    res.end()
}

async function createNotif(req, res) {
    let notif = req.body;
    notif.createdAt=Date.now()
    notif = await notifService.add(notif)
    res.send(notif)
}

async function updateNotif(req, res) {
    const notif = req.body;
    await notifService.update(notif)
    res.send(notif)
}

module.exports = {
    getNotifs,
    deleteNotif,
    createNotif,
    updateNotif
}