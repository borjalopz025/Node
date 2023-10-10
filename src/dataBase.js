const mysql = require("mysql2")

const pool = mysql.createPool(
            {
                host: "localhost",
                user: "root",
                password: "borborjaja",
                database: "retoo1",
                waitForConnections: true,
                connectionLimit: 10,
                maxIdle: 10,
                idleTimeout: 60000,
                queueLimit: 0
            }
).promise();


console.log("conexion con la BBDD creada");

module.exports = {pool}