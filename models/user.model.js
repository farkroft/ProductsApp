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
    }
},
{
    timestamps: true
})

mongoose.set('useCreateIndex', true)

module.exports = mongoose.model('User', UserSchema)