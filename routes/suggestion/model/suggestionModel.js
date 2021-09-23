const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
    title : {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    author: {
        type: String,
        lowercase: true
    },
    suggestion: {
        type: String,
        lowercase: true,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    anonymous: {
        type:Boolean
    },
    timeCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("suggestion", suggestionSchema)