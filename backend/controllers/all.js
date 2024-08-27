const { getAllMessages } = require('../db/queries')

const all = async (req, res) => {
    const all = await getAllMessages()
    res.render("messages", { messages: all });
}

module.exports = all