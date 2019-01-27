const express = require('express')
const router = express.Router()

const productInvestDetail = require('../controllers/productInvestDetail.controller')

router.get('/productinvestdets', productInvestDetail.index)
router.get('/productinvestdets/:id', productInvestDetail.getOne)
router.post('/productinvestdets', productInvestDetail.create)

module.exports = router