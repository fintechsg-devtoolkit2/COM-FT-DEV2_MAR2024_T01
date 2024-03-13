const mysql = require("mysql");
require("dotenv").config({ path: "../config/.env" });

parameters = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
};

const con = mysql.createConnection(parameters);
con.connect((error) => {
if (error) {
console.log(error);
} else {
// if successful, write a message to the console
console.log("Connected to MySQL");
}
});
