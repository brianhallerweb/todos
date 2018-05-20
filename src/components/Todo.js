import React from "react";

const Todo = props => {
  return (
    <li className="option">
      <p className="option__text">{props.todo}</p>
      <button
        className="button button--link"
        onClick={() => props.handleDelete(props.id)}
      >
        X
      </button>
    </li>
  );
};

export default Todo;
