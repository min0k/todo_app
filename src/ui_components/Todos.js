import React from "react";
import TodoCard from "./TodoCard";
import { nanoid } from "nanoid";

export default function Todo(props) {
  const AllTodos = props.todos.map((e) => {
    if (e.isDone === false) {
      return (
        <TodoCard
          isDone={e.isDone}
          task={e.task}
          key={nanoid()}
          id={e.id}
          completeTask={props.completeTask}
        />
      );
    } else {
      return null
    }
  });
  return <div className="todo">{AllTodos}</div>;
}

