const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SliderSchema = new Schema({
    name: {
        type: String
    },
    imageUrl: {
        type: String
    },
    urlPath: {
        type: String
    },
    sortNumber: {
        type: Number
    },
    isActive: {
        type: Boolean
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Slider', SliderSchema)