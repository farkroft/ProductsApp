const Product = require('../models/product.model');

// test endpoint
exports.test = function(req, res){
    res.send('Greetings from products controller')
}

// create function
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send(product)
    })
}

// find detail function
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function(err, product) {
        if(err) return next(err)
        res.send(product)
    })
}

// update function
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send(product)
    })
}

// delete function
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err){
        if (err) return next(err);
        res.send('Deleted succesfully')
    })
}

// get all function
exports.product_getAll = (req, res) => {
    Product.find(req.params.id)
    .then( products => {
        res.send(products)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}