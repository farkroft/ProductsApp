var cloudinary = require('cloudinary')
var Picture = require('../models/picture.model')
var Product = require('../models/product.model')
const mongoose = require('mongoose')

cloudinary.config({
    cloud_name: 'dbde9il12',
    api_key: '216564982351887',
    api_secret: 'ZIpvIymcQP6DhcklBX32Zpamdb0'
    // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = {
    upload: function (req, res, next) {
        Product.findOne({_id: req.body.productId}, function (err, result){
            // console.log(req.files)
            cloudinary.uploader.upload(req.files.url.path, function (resp) {
                var picture = new Picture({
                    url: resp.url,
                    productId: req.body.productId
                }).save(function (err, response) {
                    if (err) return next (err)
                    result.pictures.push(response._id)
                    result.save(function (err, results) {
                        if (err) return next (err)
                        res.json({
                            error: false,
                            result: response
                        })
                    })
                })
            })
        })
    },
    get: function (req, res, next) {
        Picture.find().populate({path: 'productId', select: 'name'}).exec(function (err, result) {
            if (err) return next(err)
            res.json(result)
        })
    },
    getOne: function (req, res, next) {
        Picture.findById(req.params.id).populate('productId').exec(function (err, result) {
            if (err) return next(err)
            // console.log(result.product.name)
            res.json(result)
        })
    },
    destroy: function (req, res, next) {
        Picture.findOneAndDelete(req.params.id)
        .then( message => {
            res.send({
                message: 'Picture deleted'
            })
        }).catch( err => {
            res.status(404).send({
                message: err.message
            })
        })
    },
    update: function (req, res, next) {
        Picture.findByIdAndUpdate(req.params.id)
        .then( results => {
            res.send({
                result: results
            })
        }).catch(err => {
            res.status(404).send({
                message: err.message
            })
        })
    }
}