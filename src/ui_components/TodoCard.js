import React from "react";

export default function TodoCard(props) {

  function completeHandle() {
    props.completeTask(props.id);
  }



  return (
    <div className="todocard">
      <p className="todocard--text">
        {props.task}
      </p>
      <button  onClick={completeHandle} className="todocard--button done">
      ✓
      </button>
    </div>
  );
}
