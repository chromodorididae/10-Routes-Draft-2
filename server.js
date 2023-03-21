//REMEMBER: Index, New, Delete, Update, Create, Edit, Show
// Require modules
const express = require('express');
// Create the Express app
const app = express();

//LOAD DATA FROM MODULES FOLDER
const breakfast = require('./models/breakfast')
const lunch = require('./models/lunch')
const dinner = require('./models/dinner')
const drinks = require('./models/drinks')
const desserts = require('./models/desserts')


//LOAD ROUTES HERE
const reviews = require('./routes/reviews')
const menu = require('./routes/menu')
const jobs = require('./routes/jobs')
const about = require('./routes/about')

//LOAD, CONFIG, CREATE VIEW ENGINE
const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())


app.get('/', (req, res) => {
    res.send("<h1>Welcome to the homepage</h1>");
});


// app.get('/menu', function(req, res) {
//     res.send('<h1>menu goes here</h1>');
// }); //create link to menu page with 5 models displayed

// app.get('/jobs', function(req, res) {
//     res.send('<h1>form goes here</h1>');
// });

app.get('/contact', function(req, res) {
    res.send('<h1>contact info goes here</h1>');
});

// app.get('/about', function(req, res) {
//     res.send('<h1>about info goes here</h1>');
// });


// app.get('/reviews', function(req, res) {
//     res.send('<h1>Hello World!</h1>');
// }); //STEP 1 MOVE REVIEWS TO ROUTE - 1/5 TO 5/5 REVIEWS


app.use('/reviews', reviews)
app.use('/menu', menu)
app.use('/jobs', jobs)
app.use('/about', about)






// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});