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
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAdd.bind(this)}>
          <input className="add-option__input" type="text" name="newTodo" />
          <button className="button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
