const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { createNotif, getNotifs, deleteNotif, updateNotif } = require('./notif.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getNotifs)
router.post('/', createNotif) // requireAuth,
router.delete('/:id', deleteNotif) //requireAuth,
router.put('/:id', updateNotif) //requireAuth,

module.exports = router