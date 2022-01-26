import React from "react";

export default function TodoCard(props) {
  console.log(props);
  const doneStyles = {
    color: "#C8C8C8",
    textDecorationLine: "line-through",
  };

  function completeHandle() {
    props.completeTask(props.id);
  }

  const temp = () => {
    return props.isDone ? "✓" : "hello";
  }

  const doneEmoji = props.isDone ? "undo" : "✓";
  
  const undoEmojiStyles = {
    color: "grey",
    fontSize: "14px",
  }

  return (
    <div className="todocard">
      <p style={props.isDone ? doneStyles : null} className="todocard--text">
        {props.task}
      </p>
      <button style={props.isDone ? undoEmojiStyles : null} onClick={completeHandle} className="todocard--button done">
       {doneEmoji}
      </button>
    </div>
  );
}
