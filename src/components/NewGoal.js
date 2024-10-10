import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [userInput, setEnteredText] = useState("");
  const addGoalHandler = (event) => {
    event.preventDefault();

    const NewGoal = { id: Math.random().toString(), text: userInput };
    props.onAddGoal(NewGoal);
    setEnteredText("");
  };

  const addChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };
  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={userInput} onChange={addChangeHandler} />
      <button type="submt">Add Goal</button>
    </form>
  );
};

export default NewGoal;
