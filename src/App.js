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
    const id = nanoid();
    e.preventDefault();
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

  // Add Delete and Complete functionality
  function completeTask(e) {
  }


  function deleteTask(id) {
    const updatedTodos = todos.filter(e => {
      return e.id !== id
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
      <Todo todos={todos} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
