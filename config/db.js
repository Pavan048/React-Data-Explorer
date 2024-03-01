const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password:"Pavan@1234",
    host:"localhost",
    port:5432,
    database:"customers"
});


module.exports = pool;