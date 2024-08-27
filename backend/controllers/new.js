
const { insertMessage } = require('../db/queries')
const newMsg = async (req, res) => {
    await insertMessage(req.body.author, req.body.message, new Date())

    res.redirect("/");
}

module.exports = newMsg
