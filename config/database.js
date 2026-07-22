const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students_db",
    password: "admin",
    port: 5432
});

pool.connect().then((client) => {
    console.log("Database Connected!");
    client.release();
}).catch((err) => {
    console.log("Database Connection Failed!");
    console.error(err.message);
})


module.exports = pool;