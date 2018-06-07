require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("./db/mongoose");
const Todo = require("./models/todoModel");
const getTodos = require("./controllers/getTodos");
const postTodo = require("./controllers/postTodo");
const deleteTodo = require("./controllers/deleteTodo");

app.use(bodyParser.json());

app.post("/todos", postTodo);

app.get("/todos", getTodos);

app.delete("/todos/:id", deleteTodo);

app.use(express.static("public"));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

app.listen(process.env.PORT, () =>
  console.log(`Todos server running on port ${process.env.PORT}...`)
);

module.exports = app;
