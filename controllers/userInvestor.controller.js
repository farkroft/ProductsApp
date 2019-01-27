const mongoose = require('mongoose')
var UserInvestor = require('../models/userInvestor.model')
var ProductInvest = require('../models/productInvest.model')
var User = require('../models/user.model')

module.exports = {
    create: function (req, res, next) {
        User.findOne({_id:req.body.userId}, function (err, result) {
            ProductInvest.findOne({_id:req.body.productInvestId}, function (err, results) {
                let userinvestor = new UserInvestor({
                    investorLot: req.body.investorLot,
                    investorPay: req.body.investorPay,
                    userId: req.body.userId,
                    productInvestId: req.body.productInvestId
                }).save(function (err, response) {
                    if (err) return next(err)
                    results.push(response._id)
                    results.save()
                    result.push(response._id)
                    result.save(function (err, userIn) {
                        if (err) return next(err)
                        res.status(200).send({
                            response
                        })
                    })
                })
            })
        })
    },
    getOne: function (req, res, next) {
        UserInvestor.findOne({_id:req.params.id})
        .populate('productInvestId')
        .populate('userId')
        .exec(function (err, result) {
            if (err) return next(err)
            res.status(200).send({
                result
            })
        })
    },
    getAll: function (req, res, next) {
        UserInvestor.find()
        .populate({path: 'productInvestId', select: '_id'})
        .populate({path: 'userId', select: 'email'})
        .exec(function (err, result) {
            if (err) return next(err)
            res.status(200).send({
                result
            })
        })
    }
}