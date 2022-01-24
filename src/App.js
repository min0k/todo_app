import React from "react";
import Header from "./UIcomponents/Header";
import Todo from "./UIcomponents/Todos";
import useTodoList from "./domain_components/useAnimatedGif";
import useTodoLogic from "./domain_components/useTodoLogic";

function App() {
  const { broom, triggerGif } = useTodoList();
  const {handleSubmit,
    handleInput,
    userInputNewTodo,
    todos,
    deleteTask,
    completeTask,
    handleClearFinishedTasks} = useTodoLogic();


  return (
    <div className="app">
      <Header
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        UserInputNewTodo={userInputNewTodo}
      />
      <Todo todos={todos} deleteTask={deleteTask} completeTask={completeTask} />
      <button
        onMouseOver={triggerGif}
        onMouseOut={triggerGif}
        className="cleartasks--button"
        onClick={handleClearFinishedTasks}
      >
        ➤ clear finished tasks
        <img src={broom} width="40px" alt="loading..." />
      </button>
    </div>
  );
}

export default App;
