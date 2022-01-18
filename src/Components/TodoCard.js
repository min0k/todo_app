import React from "react";

export default function TodoCard(props) {
  console.log(props.isDone);

  const doneStyles = {
    color: "grey",
    textDecorationLine: "line-through",
  };

  function deleteHandle() {
    props.deleteTask(props.id)
  }

  function completeHandle() {
    props.completeTask(props.id)
  }
  

  return (
    <div className="todocard">
      <p style={props.isDone ? doneStyles : null} className="todocard--text">
        {props.task}
      </p>
      <button
        onClick={deleteHandle}
        className="todocard--button delete"
      >
        ✘
      </button>
      <button
        onClick={completeHandle}
        className="todocard--button done"
      >
        ✓
      </button>
    </div>
  );
}
