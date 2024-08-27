const pool = require('./pool');


async function getAllMessages() {
   try {
      // Make sure you're querying the correct table, e.g., "messages"
      const { rows } = await pool.query("SELECT * FROM messages"); // Change this if your table is different
      return rows;
   } catch (err) {
      console.error("Error retrieving messages", err);
      throw err;  // Rethrow error to handle it properly in the calling function
   }
}

async function getMessageById(id) {
   try {
      const { rows } = await pool.query("SELECT * FROM messages WHERE user_id = $1", [id]);
      return rows.length > 0 ? rows[0] : null;  // Return the message if found, otherwise return null
   } catch (err) {
      console.error("Error retrieving message by ID", err);
      throw err;
   }
}


async function insertMessage(username, text, date) {
   await pool.query("INSERT INTO messages(username, text, date) values($1, $2, $3)",
      [username, text, date]);
}


module.exports = {
   getAllMessages,
   insertMessage,
   getMessageById
}

