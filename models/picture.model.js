const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = require('./product.model')

let PictureSchema = new Schema({
    url: {
        type: String
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
})
// PictureSchema.methods.pro

module.exports = mongoose.model('Picture', PictureSchema)