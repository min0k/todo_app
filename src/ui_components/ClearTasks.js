import React from "react";

export default function ClearTasks(props) {
  return (
    <div>
      <button
        onMouseOver={props.triggerGif}
        onMouseOut={props.triggerGif}
        className="cleartasks--button"
        onClick={props.handleClearFinishedTasks}
      >
        ➤ clear finished tasks
        <img src={props.broom} width="40px" alt="loading..." />
      </button>
    </div>
  );
}
