const express = require('express')
const router = express.Router()

const province_controller = require('../controllers/province.controller')

// router.post('/province', province_controller.import)
// router.get('/province', province_controller.index)
// router.get('/province', province_controller.getOne)
router.get('/province/:file', province_controller.import)

module.exports = router