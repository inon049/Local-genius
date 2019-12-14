const pushNotifService = require('./push-notif.service')

module.exports = {
subscribe,
// push
}


async function subscribe(req,res){
    try{
        await pushNotifService.subscribe(req.body,req.session.user)
        res.status(201).json({});
    }catch(err){
        res.status(401).send({ error: err })
    }
}

// function push(req,res){

// }