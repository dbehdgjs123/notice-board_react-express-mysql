const express = require("express");
const dbconfig = require("./config/database");
const mysql = require("mysql");
const connection = mysql.createConnection(dbconfig);
const app = express();
const port = 5000;
app.use(express.json());

app.get("/", (req, res) => res.send("Hi Express"));

app.get("/api/posts", (req, res) => {
  const sql = "SELECT * From post WHERE isdeleted = 0";
  connection.query(sql, (error, result, fields) => {
    if (error) throw error;
    res.send(result);
    console.log(result);
  });
});

app.post("/api/posts", (req, res) => {
  const sql = "INSERT INTO post VALUES (null, ?, ?, ?, 0, NOW())";
  const { writer, title, maintext } = req.body;
  const params = [title, writer, maintext];
  connection.query(sql, params, (error, result, fields) => {
    if (error) throw error;
    res.send(result);
    console.log(result);
  });
});

app.get("/api/posts/:id", (req, res) => {
  const sql =
    "SELECT title,writer,maintext,createdDate From post WHERE isdeleted = 0 AND id = ?";
  const { id } = req.params;
  connection.query(sql, [id], (error, result, fields) => {
    if (error) throw error;
    res.send(result);
    console.log(result);
  });
});

app.listen(port, () => console.log("hi express!!"));
