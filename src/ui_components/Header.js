import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1>🗒️ my todo list</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          placeholder="new todo"
          type="text"
          onChange={props.handleInput}
          value={props.UserInputNewTodo}
        ></input>
        <button type="submit" className="header--button">
          ➕
        </button>
      </form>
    </div>
  );
}
