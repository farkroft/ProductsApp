const express = require('express')
const router = express.Router()

const investordetail_controller = require('../controllers/investorDetail.controller')

router.get('/investordetail', investordetail_controller.index)
router.get('/investordetail/:id', investordetail_controller.getOne)
router.post('/investordetail', investordetail_controller.create)

module.exports = router