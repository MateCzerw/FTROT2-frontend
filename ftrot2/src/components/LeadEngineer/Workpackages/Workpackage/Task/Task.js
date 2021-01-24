import { Button } from "@material-ui/core";
import React from "react";
import "./Task.css";
const Task = ({ name, duration }) => {
  return (
    <div className="leadEngineer task">
      <p>Name: {name}</p>
      <p>Duration: {duration}h</p>
      <div className="task__actionButtons">
        <Button>See Details</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default Task;
