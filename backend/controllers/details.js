const messages = require('../views/messages')
const details = (req, res) => {
    console.log(req.params.id)
    res.render("open", { message: messages[req.params.id] })
}

module.exports = details