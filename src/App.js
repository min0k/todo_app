import { nanoid } from "nanoid";
import React from "react";
import Header from "./Components/Header";
import Todo from "./Components/Todos";
import sweep from "./sweep.gif";
import sweep_static from "./sweep_static.jpg";

function App() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [UserInputNewTodo, setUserInputNewTodo] = React.useState("");
  const [broom, setBroom] = React.useState(sweep_static);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInput(e) {
    setUserInputNewTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();

    if (UserInputNewTodo === "") {
      return;
    }

    setTodos((prevValue) => [
      ...prevValue,
      {
        task: UserInputNewTodo,
        isDone: false,
        id: id,
      },
    ]);
    setUserInputNewTodo("");
  }

  function completeTask(id) {
    const updatedTodos = todos.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          isDone: !obj.isDone,
        };
      } else {
        return {
          ...obj,
        };
      }
    });
    setTodos(updatedTodos);
  }

  function deleteTask(id) {
    const updatedTodos = todos.filter((e) => {
      return e.id !== id;
    });
    setTodos(updatedTodos);
  }

  function handleClearFinishedTasks() {
    const clearedArray = todos.filter((e) => e.isDone !== true);
    setTodos(clearedArray);
  }

  function triggerGif() {
    if (broom === sweep_static) {
      setBroom(sweep);
    } else {
      setBroom(sweep_static);
    }

    console.log(broom);

  }

  return (
    <div className="app">
      <Header
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        UserInputNewTodo={UserInputNewTodo}
      />
      <Todo todos={todos} deleteTask={deleteTask} completeTask={completeTask} />
      <button
        onMouseOver={triggerGif}
        onMouseOut={triggerGif}
        className="cleartasks--button"
        onClick={handleClearFinishedTasks}
      >
        clear finished tasks
        <img src={broom} width="40px" alt="loading..." />
      </button>
    </div>
  );
}

export default App;
