const mongoose = require('mongoose')
var User = require('../models/user.model')

module.exports = {
    create: function (req, res, next) {
        let user = new User({
            name: req.body.name,
            email: req.body.email
        })
        user.save(function (err) {
            if (err) return next(err)
            res.send(user)
        })
    },
    detail: function (req, res, next) {
        User.findOne({_id:req.params.id})
        .then( users => {
            res.send(users)
        }).catch(err => {
            res.status(404).send({
                message: err.message
            })
        })
    },
    getAll: function (req, res, next) {
        User.find()
        .then( users => {
            res.send(users)
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
    },
    destroy: function (req, res, next) {
        User.findByIdAndDelete({_id:req.params.id})
        .then( users => {
            res.send({
                message: 'Deleted Succesfully'
            })
        }).catch(err => {
            res.status(404).send({
                message: err.message
            })
        })
    },
    update: function (res, req, next) {
        User.findOneAndUpdate({_id:res.params.id})
        .then( users => {
            res.send(users)
        }).catch(err => {
            res.status(404).send({
                message: err.message
            })
        })
    }
}