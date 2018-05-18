import React from "react";

const Todo = props => {
  return (
    <li>
      {props.todo}
      <button onClick={() => props.handleDelete(props.id)}>X</button>
    </li>
  );
};

export default Todo;
