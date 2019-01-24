var cloudinary = require('cloudinary')
var Picture = require('../models/picture.model')

cloudinary.config({
    cloud_name: 'dbde9il12',
    api_key: '216564982351887',
    api_secret: 'ZIpvIymcQP6DhcklBX32Zpamdb0'
})

module.exports = {
    upload: function (req, res, next) {
        console.log(req.files.url.path);
        cloudinary.uploader.upload(req.files.url.path, function (resp) {

            var picture = new Picture({
                url: resp.url
            }).save(function (err, response ){
                if (err) return next(err)
                res.json({
                    error: false,
                    result: response
                })
            })
        })
    },
    get: function (req, res, next) {
        Picture.find({}, function (err, result) {
            if (err) return next(err)
            res.json({picture:result})
        })
    }
}