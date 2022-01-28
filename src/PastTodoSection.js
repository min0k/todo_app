import { nanoid } from "nanoid";
import React from "react";
import ClearTasks from "./ui_components/ClearTasks";
import useAnimatedGif from "./domain_components/useAnimatedGif";

export default function PastTodoSection(props) {
  const { broom, triggerGif } = useAnimatedGif();

  const todoHistory = props.todos.map((e) => {
    if (e.isDone === true) {
      return (
        <p key={nanoid()} className="past-todos--text">
          {e.task}
        </p>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="past-todos">
      <h1 className="past-todos--h1">todo history</h1>
      {todoHistory}
      <ClearTasks
        triggerGif={triggerGif}
        handleClearFinishedTasks={props.handleClearFinishedTasks}
        broom={broom}
      />
    </div>
  );
}
