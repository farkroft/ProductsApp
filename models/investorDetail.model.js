const mongoose = require('mongoose')
const Schema = mongoose.Schema

let InvestorDetailSchema = new Schema({
    cardType: {
        type: String
        // enum
    },
    incomeResource: {
        type: String
        // enum
    },
    salaryRange: {
        type: String
        // enum
    },
    identityCardNumber: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    birthDate: {
        type: Date
    },
    userInvestorId: {
        type: Schema.Types.ObjectId,
        ref: 'UserInvestor'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('InvestorDetail', InvestorDetailSchema)