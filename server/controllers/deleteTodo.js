const mongoose = require("mongoose");
const Todo = require("../models/todo");

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
};

module.exports = deleteTodo;
