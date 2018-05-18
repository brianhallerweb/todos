const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todosSchema = Schema({
  todo: { type: String }
});

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
