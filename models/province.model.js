const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProvinceSchema = new Schema({
    code: {
        type: Number
    },
    parent_code: {
        type: Number
    }
    name: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Province', ProvinceSchema)