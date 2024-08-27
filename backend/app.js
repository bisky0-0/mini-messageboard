
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: '/home/bisky/repos/node/TOP-FULLSTACK/mini-message-board/.env' });


// Set up view engine and views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Require and use routes
const indexRoutes = require('./routes/index');
const newRoutes = require('./routes/new');


app.use('/', indexRoutes);
app.use('/', newRoutes);

// Use PORT provided in environment or default to 3000
const port = process.env.APPPORT || 3000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
    // ...
});