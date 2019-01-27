const mongoose = require('mongoose')
var ProductInvest = require('../models/productInvest.model')

module.exports = {
    create: function (req, res, next) {
        let productInvest = new ProductInvest({
            price: req.body.price,
            lot: req.body.lot,
            productId: req.body.productId
        })
        productInvest.save(err => {
            if (err) return next (err)
            res.status(200).send({
                productInvest
            })
        })
    },
    getAll: function (req, res, next) {
        ProductInvest.find()
        .then( prodInvests => {
            res.send(prodInvests)
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
    },
    getOne: function (req, res, next) {
        // console.log(countViews)
        console.log(ProductInvest.findOne({_id:req.params.id}).schema.obj.countView)
        let countViews = (ProductInvest.findOne({_id:req.params.id}).schema.obj.countView)
        ProductInvest.findOneAndUpdate({_id: req.params.id}, {$inc: {countViews: 1}}, {new: true})
        .then(prodInvests => {
            res.send(prodInvests)
        }).catch(err => {
            res.status(404).send({
                message: err.message
            })
        })
    }
}