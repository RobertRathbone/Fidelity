const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required"],
    },
    body: {
        type: String,
        required: [true, "A blog is not a blog without some words here..."],
    },
    description: {
        type: String,
        required: [true, "A short synopsis is not just appreciated, but required here."],
    },
})

module.exports.Blog = mongoose.model("Blog", BlogSchema);
