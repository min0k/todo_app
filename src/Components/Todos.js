import React from "react";
import TodoCard from "./TodoCard";
import { nanoid } from "nanoid";

export default function Todo(props) {

  const AllTodos = props.todos.map((e) => {
    return (
      <TodoCard task={e.task} key={nanoid()} id={e.id} deleteTask={props.deleteTask} />
    );
  });

  return <div className="todo">{AllTodos}</div>;
}
