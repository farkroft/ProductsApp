const Picture = require('../models/picture.model')
const cloudinary = require('cloudinary')
const multer = require('multer')
const cloudinaryStorage = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
})

const parser = multer({ storage: storage })

exports.test = function(req, res){
    res.send('Greetings from picture controller')
}

exports.picture_create = function (req, res, next) {
    let picture = new Picture(
        {
            url: req.body.url
        }
    )

    picture.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send(picture)
    })
}