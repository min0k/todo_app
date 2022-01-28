import React from "react";
import MainTodoSection from "./MainTodoSection";
import PastTodoSection from "./PastTodoSection";

import useTodoLogic from "./domain_components/useTodoLogic";

//lift relevant state up into App, use memo on children.

//add todo history clear functionality with an "Are you sure?" popup

//add total completed tasks
//add show completed date/time on hover

//add simple header
//add simple footer

function App() {
  const {
    handleSubmit,
    handleInput,
    userInputNewTodo,
    completeTask,
    handleClearFinishedTasks,
    todos,
  } = useTodoLogic();

  return (
    <div className="app">
      <MainTodoSection
        todos={todos}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        UserInputNewTodo={userInputNewTodo}
        completeTask={completeTask}
      />
      <PastTodoSection 
      todos={todos}
      handleClearFinishedTasks={handleClearFinishedTasks}
      />
    </div>
  );
}

export default App;
