const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { addChat, getChats, deleteChat ,addMsg } = require('./chat.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/:id', getChats)
router.post('/', addChat) // requireAuth,
router.post('/:id', addMsg) // requireAuth,
// router.post('/', addMsg) // requireAuth,
router.delete('/:id', deleteChat) //requireAuth,

module.exports = router