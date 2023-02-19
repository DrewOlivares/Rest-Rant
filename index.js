//Modules
const express = require('express')
const app = express()
require('dotenv').config()
const methodOverride = require('method-override')

//Express
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Routes and controllers
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('*', (req, res) => {
    res.status(404).render('error404');
})

// Listen
app.listen(process.env.PORT);
