const mongoose = require("mongoose");
const Todo = require("../models/todo");

const postTodo = (req, res) => {
  new Todo({
    todo: req.body.todo
  })
    .save()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
};

module.exports = postTodo;
