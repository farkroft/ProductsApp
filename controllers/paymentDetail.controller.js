const mongoose = require('mongoose')
var PaymentDetail = require('../models/paymentDetail.model')

module.exports = {
    create: function (req, res, next) {
        let paymentMethodEnum = PaymentDetail.schema.path('paymentMethod').enumValues
        let paymentdetail = new PaymentDetail({
            paymentMethod: paymentMethodEnum[req.body.paymentMethod],
            receipt: req.body.receipt,
            cardNumber: req.body.cardNumber,
            cardHolderName: req.body.cardHolderName,
            cardValidDate: req.body.cardValidDate,
            cvv: req.body.cvv,
            userInvestorId: req.body.userInvestorId
        })
        paymentdetail.save(err => {
            if (err) return next(err)
            res.status(200).send({
                paymentdetail
            })
        })
    },
    getOne: function (req, res, next) {
        PaymentDetail.findOne({_id:req.params.id})
        .then(result => {
            res.status(200).send({
                result
            })
        }).catch(err => {
            res.status(404).send({
                message: err.message
            })
        })
    },
    index: function (req, res, next) {
        PaymentDetail.find()
        .then(result => {
            res.status(200).send({
                result
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
    }
}