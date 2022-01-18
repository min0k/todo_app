import React from "react";

export default function TodoCard(props) {

  return (
    <div className="todocard">
      <p className="todocard--text">{props.task}</p>
      <button onClick={() => props.deleteTask(props.id)} className="todocard--button delete">✘</button>
      <button className="todocard--button done">✓</button>
    </div>
  );
}
