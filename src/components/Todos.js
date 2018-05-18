import React from "react";
import Todo from "./Todo";

const Todos = props => {
  return (
    <div>
      {props.todos.length === 0 && <p>please add a todo to get started</p>}
      <ol>
        {props.todos.map(todo => (
          <Todo
            key={todo._id}
            todo={todo.todo}
            id={todo._id}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </ol>
    </div>
  );
};

export default Todos;
