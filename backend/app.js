
const express = require('express');
const app = express();
const path = require('path');


// Set up view engine and views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Require and use routes
const indexRoutes = require('./routes/index');
const newRoutes = require('./routes/new');
const { Console } = require('console');

app.use('/', indexRoutes);
app.use('/', newRoutes);

// Start the server
app.listen(8000, () => {
    console.log("localhost is running");
});

require('dotenv').config({ path: '../.env' });
console.log(process.env.HOST)
