const mongoose = require('mongoose')
const Schema = mongoose.Schema

let InvestorDetailSchema = new Schema({
    cardType: {
        type: String
        enum: ['KTP', 'SIM', 'NPWP']
    },
    incomeResource: {
        type: String
        enum: ['Gaji', 'Hasil Usaha', 'Tabungan', 'Warisan', 'Lainnya']
    },
    salaryRange: {
        type: String
        enum: ['Rp 1.000.000,00 - Rp 4.999.999,00', 'Rp 5.000.000,00 - Rp 9.999.999,00', 'Rp 10.000.000,00 - Rp 19.999.999,00',
    'Rp 20.000.000,00 - Rp 49.999.999,00', 'Rp 50.000.000,00 ke atas']
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