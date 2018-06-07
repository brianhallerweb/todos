const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  todo: { type: String }
});

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;
