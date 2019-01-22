const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PictureSchema = new Schema({
    url: {
        type: String
    }
})