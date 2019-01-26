const express = require('express')
const router = express.Router()

const slider_controller = require('../controllers/slider.controller')
const multipart = require('connect-multiparty')()

// endpoints
router.get('/sliders', slider_controller.get)
router.get('/sliders/:id', slider_controller.getOne)
router.post('/sliders', multipart, slider_controller.upload)

module.exports = router;