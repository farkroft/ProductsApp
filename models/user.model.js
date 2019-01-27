const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    lastLogin: {
        type: Date,
        default: Date.now
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

mongoose.set('useCreateIndex', true)

module.exports = mongoose.model('User', UserSchema)