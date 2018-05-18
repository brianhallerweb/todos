const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB...", err));
const Todos = require("./models/todosModel");

app.use(bodyParser.json());

app.get("/api/notes", (req, res) => {
  Todos.find((err, todos) => {
    res.json(todos);
  });
});

app.post("/api/notes", (req, res) => {
  const newTodo = new Todos({
    todo: req.body.todo
  });
  newTodo.save((err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

app.delete("/api/notes/:id", (req, res) => {
  Todos.remove({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(8081, () => console.log("Todos server running..."));
