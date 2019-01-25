const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PaymentDetailSchema = new Schema({
    paymentMethod: {
        type: String
        // enum
    },
    receipt: {
        type: Number
    },
    cardNumber: {
        type: String
    },
    cardHolderName: {
        type: String
    },
    cardValidDate: {
        type: String
    },
    cvv: {
        type: String
    },
    isPaid: {
        type: Boolean
    },
    userInvestorId: {
        type: Schema.Types.ObjectId,
        ref: 'UserInvestor'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('PaymentDetail', PaymentDetailSchema)