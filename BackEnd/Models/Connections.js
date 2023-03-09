var mysql = require('mysql')
var conn = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        port: 3306,
        database: "book_my_show2"
    }
);

conn.connect((err) => {
    if (err)
        throw err;

    console.log("Database is connected")
}
);
module.exports = conn;