const express = require('express')
const router = express.Router()

const paymentdetail_controller = require('../controllers/paymentDetail.controller')

router.get('/paymentdetail', paymentdetail_controller.index)
router.get('/paymentdetail/:id', paymentdetail_controller.getOne)
router.post('/paymentdetail', paymentdetail_controller.create)

module.exports = router