const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    pin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pin',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Comment', commentSchema);