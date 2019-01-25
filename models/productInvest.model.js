const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductInvestSchema = new Schema({
    price: {
        type: Number
    },
    lot: {
        type: Number
    },
    countView: {
        type: Number
        default: 0
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('ProductInvest', ProductInvestSchema)