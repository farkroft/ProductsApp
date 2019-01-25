const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Picture = require('./picture.model')

let ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number,
        required: true
    },
    pictures: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Picture'
        }
    ]
},
{
    timestamps: true
});

// ProductSchema.virtual('pictures', {
//     ref: 'Picture',
//     localField: '_id',
//     foreignField: 'product'
// })

// function autoPopulatePictures (next) {
//     this.populate('pictures')
//     next()
// }

// ProductSchema.pre('findOne', autoPopulatePictures)
// ProductSchema.pre('find', autoPopulatePictures)

// Export the model
module.exports = mongoose.model('Product', ProductSchema)