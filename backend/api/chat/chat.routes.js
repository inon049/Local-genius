const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { createChat, getChats, deleteChat, addMsg } = require('./chat.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getChats)
router.post('/', createChat) // requireAuth,
router.post('/:id', addMsg) // requireAuth,
router.delete('/:id', deleteChat) //requireAuth,

module.exports = router