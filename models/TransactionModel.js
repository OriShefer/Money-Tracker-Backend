const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 10,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        maxLength: 50,
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Transaction', TransactionSchema)