const webpush = require('web-push');
const userService = require('../user/user.service')
const publicVapidKey = 'BOf0qAhBz4a-lxagLIqN5ns4y6F4s2Ptailr_RP0abwLiozIceJ0EmZR8a7sHsR0wxSdhdtdbdpaZN4vfBRUS3o';
const privateVapidKey = 'GmbwzEwB3YQyIhZFKWC3m8NuSfYKwbmldV26q792UKk';

webpush.setVapidDetails('mailto:dror.uzi5@gmail.com', publicVapidKey, privateVapidKey);

module.exports = {
    subscribe,
    push
}

async function subscribe(subscription, user) {
    try {
        let userFromDb = await userService.getById(user._id)
        if (!userFromDb.serviceWorkers || !userFromDb.serviceWorkers.length) {
            userFromDb.serviceWorkers = [subscription]
            userFromDb = await userService.update(userFromDb)
            console.log('created user.serviceWorkers', userFromDb)
        } else {
            if (!userFromDb.serviceWorkers.some(sub => sub.endpoint === subscription.endpoint)) {
                userFromDb.serviceWorkers.push(subscription)
                userFromDb = await userService.update(userFromDb)
            } else {
                console.log('SW Registered already ');
            }
        }
    } catch (err) {
        console.log(err, 'in pushNotifService')
    }
}


async function push(toId, notif) {
    console.log('Pushing notif to Serviceworkers..', toId, notif);
    let user = await userService.getById(toId)
    if (user.serviceWorkers) {
        user.serviceWorkers.forEach(sub => {
            webpush.sendNotification(sub, JSON.stringify(notif)).catch(error => {
                console.log(error, '<<<ERROR in pushNotifServie');
            });
        });
        console.log('PushedSucssesfully!');
    } else {
        console.log('Push Failed..');
    }
}
