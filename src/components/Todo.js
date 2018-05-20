import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      <p className="todo__text">{props.todo}</p>
      <button
        className="button button--link"
        onClick={() => props.handleDelete(props.id)}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
