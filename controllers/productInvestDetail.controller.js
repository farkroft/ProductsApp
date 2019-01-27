const mongoose = require('mongoose')
var ProductInvestDetail = require('../models/productInvestDetail.model')

module.exports = {
    create: function (req, res, next) {
        let productInvestDetail = new ProductInvestDetail({
            description: req.body.description,
            period: req.body.period,
            returnValue: req.body.returnValue,
            sharePeriod: req.body.sharePeriod,
            background: req.body.background,
            productInvestId: req.body.productInvestId
        })
        productInvestDetail.save(err => {
            if (err) return next (err)
            res.status(200).send({
                productInvestDetail
            })
        })
    },
    index: function (req, res, next) {
        ProductInvestDetail.find()
        .then(results => {
            res.status(200).send({
                results
            })
        }).catch(err => {
            res.status(500).send({
                message: err
            })
        })
    },
    getOne: function (req, res, next) {
        ProductInvestDetail.findOne({_id:req.params.id})
        .then(results => {
            res.status(200).send({
                results
            })
        }).catch(err => {
            res.status(404).send({
                message: err.message
            })
        })
    }
}