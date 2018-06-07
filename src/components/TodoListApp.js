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
    fetch("/todos")
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  handleAdd(todo) {
    if (!todo) return "Enter valid text to add a todo";

    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        todo
      })
    })
      .then(() => fetch("/todos"))
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  handleDelete(todoId) {
    fetch("/todos/" + todoId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => fetch("/todos"))
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Todos
            todos={this.state.todos}
            handleDelete={this.handleDelete.bind(this)}
          />
          <AddTodo handleAdd={this.handleAdd.bind(this)} />
        </div>
      </div>
    );
  }
}

export default TodoListApp;
