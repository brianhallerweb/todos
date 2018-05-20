import React from "react";
import ReactDOM from "react-dom";
import TodoListApp from "./components/TodoListApp";
import "normalize.css/normalize.css"; /*normalize.css is a package for resetting default browser styling*/
import "./styles/style.scss";

ReactDOM.render(<TodoListApp />, document.getElementById("root"));
