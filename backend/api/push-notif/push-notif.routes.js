const express = require('express')
const {subscribe} = require('./push-notif.controller')
const router = express.Router()


module.exports = router


router.post('/subscribe', subscribe);
// router.post('/push', push);

