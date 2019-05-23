const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SubdistrictSchema = new Schema({
    code: {
        type: Number
    },
    regional_code: {
        type: Schema.Types.ObjectId,
        ref: 'Regional'
    },
    name: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Subdistrict', SubdistrictSchema)