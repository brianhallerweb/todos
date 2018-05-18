const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const Todo = require("./models/todoModel");

const getTodos = require("./controllers/getTodos");
const postTodo = require("./controllers/postTodo");
const deleteTodo = require("./controllers/deleteTodo");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/todos")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB...", err));

app.use(bodyParser.json());
app.use(express.static("public"));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

app.get("/api/notes", getTodos);

app.post("/api/notes", postTodo);

app.delete("/api/notes/:id", deleteTodo);

app.listen(process.env.PORT || 8081, () =>
  console.log("Todos server running...")
);
