import React from "react";
import Task from "./Task/Task";
import "./Workpackage.css";
const Workpackage = ({
  id,
  name,
  tasksQuantity,
  finishedTasks,
  endDate,
  predictedFinish,
  description,
  handleWorkpackageDelete,
  handleWorkpackageEdit,
}) => {
  return (
    //formik
    <div className="workpackage">
      <div className="workpackage__details">
        <h3>Name: {name}</h3>
        <h4>PID:</h4>
        <h4>finished tasks: {finishedTasks}</h4>
        <h4>Due to: {endDate}</h4>
        <h4>Predicted due to: {predictedFinish}</h4>
      </div>
      <div className="workpackage__description">
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className="workpackage__tasks">
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <form>
          <input></input>
          <input></input>
          <input></input>
        </form>
      </div>
    </div>
  );
};

export default Workpackage;
