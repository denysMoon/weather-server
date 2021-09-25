const mongoose = require('mongoose')

const ReviewsScheme = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Reviews', ReviewsScheme)