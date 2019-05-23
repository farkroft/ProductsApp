const mongoose = require('mongoose')
const Schema = mongoose.Schema

let RegionalSchema = new Schema({
    code: {
        type: Number
    },
    province_code: {
        type: Schema.Types.ObjectId,
        ref: 'Province'
    },
    name: {
        type: String
    },
    subdistricts: [
        {
            type: Schema.Types.ObjectId
            ref: 'Subdistrict'
        }
    ]
},
{
    timestamps: true
})

module.exports = mongoose.model('Regional', RegionalSchema)