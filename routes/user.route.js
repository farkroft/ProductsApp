const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/user.controller')

router.get('/users', user_controller.getAll)
router.get('/users/:id', user_controller.detail)
router.post('/users', user_controller.create)
router.put('users/:id', user_controller.update)
router.delete('/users/:id', user_controller.destroy)

module.exports = router