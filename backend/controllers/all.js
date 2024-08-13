const messages = require('../views/messages')

const all = (req, res) => {
    res.render("messages", { messages: messages });
}

module.exports = all