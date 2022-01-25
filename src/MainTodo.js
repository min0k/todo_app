import React from "react";
import Header from "./ui_components/Header";
import Todo from "./ui_components/Todos";
import useTodoList from "./domain_components/useAnimatedGif";
import useTodoLogic from "./domain_components/useTodoLogic";
import ClearTasks from "./ui_components/ClearTasks";

function MainTodo() {
  const { broom, triggerGif } = useTodoList();
  const {
    handleSubmit,
    handleInput,
    userInputNewTodo,
    todos,
    deleteTask,
    completeTask,
    handleClearFinishedTasks,
  } = useTodoLogic();

  return (
    <div className="main-todo">
      <Header
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        UserInputNewTodo={userInputNewTodo}
      />
      <Todo todos={todos} deleteTask={deleteTask} completeTask={completeTask} />
      <ClearTasks
        triggerGif={triggerGif}
        handleClearFinishedTasks={handleClearFinishedTasks}
        broom={broom}
      />
    </div>
  );
}

export default MainTodo;
