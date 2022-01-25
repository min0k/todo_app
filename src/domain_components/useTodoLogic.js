import React from "react";
import { nanoid } from "nanoid";

export default function useTodoLogic() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [userInputNewTodo, setUserInputNewTodo] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInput(e) {
    setUserInputNewTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();

    if (userInputNewTodo === "") {
      return;
    }

    setTodos((prevValue) => [
      ...prevValue,
      {
        task: userInputNewTodo,
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

  function handleClearFinishedTasks() {
    const clearedArray = todos.filter((e) => e.isDone !== true);
    setTodos(clearedArray);
  }

  return {
    handleSubmit,
    handleInput,
    userInputNewTodo,
    todos,
    completeTask,
    handleClearFinishedTasks,
  };
}
