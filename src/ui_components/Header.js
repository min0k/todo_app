import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <form onSubmit={props.handleSubmit}>
        <input
          placeholder="new todo"
          type="text"
          onChange={props.handleInput}
          value={props.userInputNewTodo}
        ></input>
        <button type="submit" className="header--button">
          ➕
        </button>
      </form>
    </div>
  );
}
