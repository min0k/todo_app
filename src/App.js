import { nanoid } from "nanoid";
import React from "react";
import Header from "./Components/Header";
import Todo from "./Components/Todos";

function App() {

  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [UserInputNewTodo, setUserInputNewTodo] = React.useState("");

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
    const clearedArray = todos.filter(e => e.isDone !== true)
    setTodos(clearedArray)
  }

  return (
    <div className="app">
      <Header
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        UserInputNewTodo={UserInputNewTodo}
      />
      <Todo todos={todos} deleteTask={deleteTask} completeTask={completeTask} />
      <button onClick={handleClearFinishedTasks}>clear finished</button>
    </div>
  );
}

export default App;
