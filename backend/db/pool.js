require('dotenv').config({ path: '/home/bisky/repos/node/TOP-FULLSTACK/mini-message-board/.env' });
const { Pool } = require('pg');
module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});
