const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductInvestSchema = new Schema({
    price: {
        type: Number
    },
    lot: {
        type: Number,
        default: 1
    },
    countView: {
        type: Number,
        default: 0
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    userInvestors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'UserInvestor'
        }
    ]
},
{
    timestamps: true
})

module.exports = mongoose.model('ProductInvest', ProductInvestSchema)