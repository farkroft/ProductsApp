const mongoose  = require('mongoose')
var InvestorDetail = require('../models/investorDetail.model')

module.exports = {
    create: function (req, res, next) {
        let investordetail = new InvestorDetail({
            cardType: req.body.cardType,
            incomeResource: req.body.incomeResource,
            salaryRange: req.body.salaryRange,
            identityCardNumber: req.body.identityCardNumber,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            birthDate: req.body.birthDate,
            userInvestorId: req.body.userInvestorId
        })
        investordetail.save(function (err) {
            if (err) return next(err)
            res.status(200).send({
                investordetail
            })
        })
    },
    getOne: function (req, res, next) {
        InvestorDetail.findOne({_id:req.params.id})
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
        InvestorDetail.find()
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