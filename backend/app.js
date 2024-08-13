const express = require('express');
const app = express();
const path = require('path')
const messages = require('./routes/messages')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.get("/", (req, res) => {
    res.render("messages", { messages: messages });
});

app.listen(8000, () => {
    console.log("localhost is running")
})