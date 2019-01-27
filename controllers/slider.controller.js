var cloudinary = require('cloudinary')
var Slider = require('../models/slider.model')
const mongoose = require('mongoose')

cloudinary.config({
    cloud_name: 'dbde9il12',
    api_key: '216564982351887',
    api_secret: 'ZIpvIymcQP6DhcklBX32Zpamdb0'
})

module.exports = {
    upload: function (req, res, next) {
        cloudinary.uploader.upload(req.files.image.path, function (resp) {
            var slider = new Slider({
                name: req.body.name,
                image: resp.url,
                urlPath: req.body.urlPath,
                // sortNumber: Slider.sortNumb(),
                isActive: req.body.isActive
            }).save(function (err, response) {
                if (err) return next (err)
                response.sortNumb()
                res.json({
                    error: false,
                    result: response
                })
            })
        })
    },
    get: function (req, res, next) {
        Slider.find()
        .then( sliders => {
            res.send(sliders)
        }).catch( err => {
            res.status(500).send({
                message: err.message
            })
        })
    },
    getOne: function (req, res, next) {
        Slider.findOne({_id:req.params.id})
        .then( sliders => {
            res.send(sliders)
        }).catch( err => {
            res.status(404).send({
                message: err.message
            })
        })
    },
    update: function (req, res, next) {
        Slider.findByIdAndUpdate({_id:req.params.id})
        .then( sliders => {
            res.send(sliders)
        }).catch( err => {
            res.status(404).send({
                message: err.message
            })
        })
    },
    destroy: function (req, res, next) {
        Slider.findOneAndDelete({_id:req.params.id})
        .then( sliders => {
            res.send(sliders)
        }).catch( err => {
            res.status(404).send({
                message: err.message
            })
        }) 
    }
}