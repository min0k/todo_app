import React from "react";
import sweep from "../../src/sweep.gif";
import sweep_static from "../sweep_static.jpg";

export default function useAnimatedGif() {
  const [broom, setBroom] = React.useState(sweep_static);

  function triggerGif() {
    if (broom === sweep_static) {
      setBroom(sweep);
    } else {
      setBroom(sweep_static);
    }
  }

  return { broom, triggerGif };
}
