
const messages = require('../views/messages')
const newMsg = (req, res) => {
    messages.push({
        id: messages.length + 1,
        text: req.body.message,
        user: req.body.author,
        added: new Date()
    })

    console.log(messages)

    res.redirect("/");
}

module.exports = newMsg
