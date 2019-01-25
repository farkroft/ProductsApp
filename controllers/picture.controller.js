var cloudinary = require('cloudinary')
var Picture = require('../models/picture.model')
var Product = require('../models/product.model')
const mongoose = require('mongoose')

cloudinary.config({
    cloud_name: 'dbde9il12',
    api_key: '216564982351887',
    api_secret: 'ZIpvIymcQP6DhcklBX32Zpamdb0'
})

module.exports = {
    upload: function (req, res, next) {
        Product.findOne({_id: req.body.productId}, function (err, result){
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
    }
}