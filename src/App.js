import React from "react";
import Header from "./Components/Header";
import Todo from "./Components/Todos";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [UserInputNewTodo, setUserInputNewTodo] = React.useState("");

  function handleInput(e) {
    setUserInputNewTodo(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(prevValue => [
      ...prevValue,
      {
        task: UserInputNewTodo,
        isDone: false,
      }
    ])
  }

  console.log(todos);

  // function createTodo(todo) {
  //   return {
  //   }
  // }

  return (
    <div className="app">
      <Header
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        UserInputNewTodo={UserInputNewTodo}
      />
      <Todo todos={todos}/>
    </div>
  );
}

export default App;
