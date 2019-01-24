const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PictureSchema = new Schema({
    url: {
        type: String
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Picture', PictureSchema)