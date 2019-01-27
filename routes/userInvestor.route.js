const express = require('express')
const router = express.Router()

const userinvestor_controller = require('../controllers/userInvestor.controller')

router.get('/userinvests', userinvestor_controller.getAll)
router.get('/userinvests/:id', userinvestor_controller.getOne)
router.post('/userinvests', userinvestor_controller.create)

module.exports = router