const mongoose = require('mongoose');


const SavingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    currentAmount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    destinationAmount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Saving', SavingSchema)