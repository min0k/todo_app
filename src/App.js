import React from "react";
import MainTodoSection from "./MainTodoSection";
import PastTodoSection from "./PastTodoSection";

//turn green check into back arrow when task is finished to allow
//for "unfinishing".

//add todo history clear functionality with an "Are you sure?" popup

//add total completed tasks
//add show completed date/time on hover

function App() {
  return (
    <div className="app">
      <MainTodoSection />
      <PastTodoSection />
    </div>
  );
}

export default App;
