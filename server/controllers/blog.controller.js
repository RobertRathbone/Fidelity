const { response } = require('express');
const { Blog } = require('../models/blog.model')

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createBlog = (request, response) => {
    const {title, body, description } = request.body;
    Blog.create({
        title,
        body,
        description
    })
        .then(blog=>response.json(blog))
        .catch(err=>response.json(err))
}

module.exports.findBlogs = (request, response) => {
    Blog.find({})
        .then(blogs => response.json(blogs))
        .catch(err => response.json(err));
}

module.exports.updateBlog = (request, response) => {
    Blog.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedBlog => response.json(updatedBlog))
        .catch(err => response.json(err));
}

module.exports.deleteBlog = (request, response) => {
    Blog.findOneAndDelete({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json("No delete-o", err));
}