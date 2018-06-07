const mongoose = require("mongoose");
const Todo = require("../models/todo");

const getTodos = (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(500).json(err));
};

module.exports = getTodos;
