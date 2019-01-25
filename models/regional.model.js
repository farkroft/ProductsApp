const mongoose = require('mongoose')
const Schema = mongoose.Schema

let RegionalSchema = new Schema({
    code: {
        type: Number
    },
    parent_code: {
        type: Schema.Types.ObjectId,
        ref: 'Province'
    },
    name: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Regional', RegionalSchema)