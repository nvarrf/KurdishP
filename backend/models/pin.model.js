const mongoose = require('mongoose');


const pinSchema = new mongoose.Schema({
    media: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true,

    },
    height: {
        type: Number,
        required: true,

    },
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,

    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
    },
    tags: {
        type: [String],

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Pin', pinSchema);