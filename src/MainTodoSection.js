import React from "react";
import Header from "./ui_components/Header";
import Todo from "./ui_components/Todos";

function MainTodoSection(props) {
  return (
    <div className="main-todo">
      <Header
        handleSubmit={props.handleSubmit}
        handleInput={props.handleInput}
        userInputNewTodo={props.userInputNewTodo}
      />
      <Todo todos={props.todos} completeTask={props.completeTask} />
    </div>
  );
}

export default MainTodoSection;
