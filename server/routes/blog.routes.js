const blogController = require('../controllers/blog.controller');
module.exports = function(app){
    app.get('/api', blogController.index);
    app.post('/api/blogs', blogController.createBlog);
    app.get('/api/blogs', blogController.findBlogs);
    app.put('/api/blog/:id', blogController.updateBlog);
    app.delete('/api/blog/:id', blogController.deleteBlog);
}