import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  handleAdd(e) {
    e.preventDefault();
    const todo = e.target.elements.newTodo.value.trim();
    const error = this.props.handleAdd(todo);
    this.setState(() => ({ error }));

    if (!this.error) {
      e.target.elements.newTodo.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && this.state.error}
        <form onSubmit={this.handleAdd.bind(this)}>
          <input type="text" name="newTodo" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
