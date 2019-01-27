const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserInvestorSchema = new Schema({
    investorLot: {
        type: Number
    },
    investorPay: {
        type: Number
    },
    investYear: {
        type: Number
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productInvestId: {
        type: Schema.Types.ObjectId,
        ref: 'ProductInvest'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('UserInvestor', UserInvestorSchema)