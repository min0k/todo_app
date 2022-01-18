import React from "react";

export default function TodoCard(props) {
  console.log(props.isDone);

  const doneStyles = {
    color: "grey",
    textDecorationLine: "line-through",
  };

  return (
    <div className="todocard">
      <p style={props.isDone ? doneStyles : null} className="todocard--text">
        {props.task}
      </p>
      <button
        onClick={() => props.deleteTask(props.id)}
        className="todocard--button delete"
      >
        ✘
      </button>
      <button
        onClick={() => props.completeTask(props.id)}
        className="todocard--button done"
      >
        ✓
      </button>
    </div>
  );
}
