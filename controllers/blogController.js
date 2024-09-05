const Blog = require('../models/blogs');

const blog_index = (req,res) =>{
    Blog.find()
        .then((result) => res.render('index', { title: 'All Blogs', blogs: result }))
        .catch((err) => console.log(err));
}

const blog_post = (req,res) =>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => res.redirect('./blogs'))
        .catch((err) => console.log(err));
}

const blog_create = (req,res) =>{
    res.render('create', { title: 'Create a Blog' });
}

const blog_detail = (req,res) =>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => res.render('detail', { title: 'Blog Detail', blog: result }))
        .catch(err => console.log(err));
}

const blog_delete = (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_post,
    blog_create,
    blog_detail,
    blog_delete
}