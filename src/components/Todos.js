import React from "react";
import Todo from "./Todo";

const Todos = props => {
  return (
    <div>
      {props.todos.length === 0 && (
        <p className="add-todo-error">Please add a todo to get started</p>
      )}
      <div>
        {props.todos.map(todo => (
          <Todo
            key={todo._id}
            todo={todo.todo}
            id={todo._id}
            handleDelete={props.handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
