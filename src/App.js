import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import NewGoal from "./components/NewGoal";
import GoalList from "./components/GoalList";

function App() {
  const [couseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn about the Course main topics" },
  ]);

  const onAddGoalHandler = (newGoal) => {
    //setCourseGoals(couseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoal) => prevCourseGoal.concat(newGoal));
  };
  return (
    <div className="course-goal">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={onAddGoalHandler} />
      <GoalList goals={couseGoals} />
    </div>
  );
}

export default App;
