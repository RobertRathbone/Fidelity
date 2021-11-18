const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    body: String,
    description: String
})

module.exports.Blog = mongoose.model("Blog", BlogSchema);