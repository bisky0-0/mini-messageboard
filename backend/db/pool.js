require('dotenv').config({ path: '/home/bisky/repos/node/TOP-FULLSTACK/mini-message-board/.env' });
const { Pool } = require('pg');
console.log(process.env.USERNAME)
module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});
