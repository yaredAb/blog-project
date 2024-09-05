const express = require('express');
const blogRouters = require('./routes/blogRoutes');

const app = express();
const dbURI = "mongodb+srv://<dbUsername>:<dbPassword>@sharedthought.5pjx0.mongodb.net/shared_narration?retryWrites=true&w=majority&appName=sharedThought";
const mongoose = require('mongoose');

mongoose.connect(dbURI)
    .then((result) => {
        console.log("connected to db");
        app.listen(3000);
    })
    .catch((err) => console.log("can't connect with db"));

app.set('view engine', 'ejs');

app.use('/blogs',blogRouters);

app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.use((req, res) => {
    res.render('404', { title: '404' });
})