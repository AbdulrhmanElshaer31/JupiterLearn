const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect().then((client) => {
    console.log("Database Connected!");
    client.release();
}).catch((err) => {
    console.log("Database Connection Failed!");
    console.error(err.message);
})


module.exports = pool;