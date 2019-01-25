const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductInvestDetailSchema = new Schema({
    description: {
        type: String
    },
    period: {
        type: Number
    },
    returnValue: {
        type: Number
    },
    sharePeriod: {
        type: Number
    },
    background: {
        type: String
    },
    productInvestId: {
        type: Schema.Types.ObjectId,
        ref: 'ProductInvest'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('ProductInvestDetail', ProductInvestDetailSchema)