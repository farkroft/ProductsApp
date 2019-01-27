const express = require('express')
const router = express.Router()

const productinvest_controller = require('../controllers/productInvest.controller')

router.get('/productinvests', productinvest_controller.getAll)
router.post('/productinvests', productinvest_controller.create)
router.get('/productinvests/:id', productinvest_controller.getOne)

module.exports = router