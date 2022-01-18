import { nanoid } from "nanoid";
import React from "react";
import Header from "./Components/Header";
import Todo from "./Components/Todos";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [UserInputNewTodo, setUserInputNewTodo] = React.useState("");

  function handleInput(e) {
    setUserInputNewTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();

    if (UserInputNewTodo === "") {
      return
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
    console.log(todos);
  }

  function deleteTask(id) {
    const updatedTodos = todos.filter((e) => {
      return e.id !== id;
    });
    setTodos(updatedTodos);
  }

  console.log(todos);

  return (
    <div className="app">
      <Header
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        UserInputNewTodo={UserInputNewTodo}
      />
      <Todo todos={todos} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
}

export default App;
