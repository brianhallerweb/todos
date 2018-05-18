import React, { Component } from "react";
import Header from "./Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch("/api/notes")
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  deleteTodo(todoId) {
    fetch("/api/notes/" + todoId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => fetch("/api/notes"))
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  handleAdd(todo) {
    if (!todo) return "Enter valid text to add a todo";

    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        todo
      })
    })
      .then(() => fetch("/api/notes"))
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <AddTodo handleAdd={this.handleAdd.bind(this)} />
      </div>
    );
  }
}

export default TodoListApp;
