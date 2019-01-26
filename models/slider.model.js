const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SliderSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    urlPath: {
        type: String
    },
    sortNumber: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
})

SliderSchema.methods.sortNumb = function() {
    this.sortNumber++
    return this.save()
}

module.exports = mongoose.model('Slider', SliderSchema)