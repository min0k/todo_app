import React from "react";

export default function TodoCard(props) {
  return (
    <div className="todocard">
      <p className="todocard--text">{props.task}</p>
      <button className="todocard--button delete">✘</button>
      <button className="todocard--button done">✓</button>
    </div>
  );
}
