const { getMessageById } = require('../db/queries')
const details = async (req, res) => {
    const message = await getMessageById(req.params.id)
    res.render("open", { message })
}

module.exports = details