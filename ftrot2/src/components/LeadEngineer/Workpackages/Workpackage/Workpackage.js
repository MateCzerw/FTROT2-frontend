import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Workpackage.css";

import Tasks from "./Tasks/Tasks";
import { uuid } from "uuidv4";
import TaskAdd from "./TaskAdd/TaskAdd";
import {
  addTaskAction,
  deleteTaskAction,
  editTaskAction,
} from "../../../../actions/LeadEngineerActions/workpackageActions";
import { useDispatch } from "react-redux";
import moment from "moment";

const Workpackage = ({
  id,
  name,
  finishedTasks,
  pid,
  endDate,
  predictedFinish,
  description,
  tasks,
}) => {
  const [isTaskAddOpen, setIsTaskAddOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTaskAddOpen = () => {
    setIsTaskAddOpen(true);
  };
  const handleTaskAddClose = () => {
    setIsTaskAddOpen(false);
  };

  const handleTaskAdd = (task) => {
    const taskAdded = Object.assign(
      {},
      { id: uuid() },
      {
        ...task,
        details: {
          assignedEngineer: "Jan Kowalski",
          plannedAt: moment(Date.now()).calendar(),
        },
      }
    );
    console.log(taskAdded);
    dispatch(addTaskAction(id, taskAdded));
  };

  const handleTaskDelete = (taskId) => {
    dispatch(deleteTaskAction(id, taskId));
  };

  const handleTaskEdit = (taskId, editedTask) => {
    dispatch(
      editTaskAction(id, taskId, {
        ...editedTask,
        details: {
          assignedEngineer: "Jan Kowalski",
          plannedAt: moment(Date.now()).calendar(),
        },
      })
    );
  };

  return (
    <div className="leadEngineer workpackage">
      <div className="leadEngineer workpackage__details">
        <div className="leadEngineer workpackage__info">
          <h3>Name: {name}</h3>
          <h4>PID: {pid}</h4>
          <h4>finished tasks: {finishedTasks}</h4>
          <h4>Due to: {endDate}</h4>
          <h4>Predicted due to: {predictedFinish}</h4>
        </div>
        <div className="leadEngineer workpackage__description">
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="leadEngineer workpackage__tasks">
        <Tasks
          tasks={tasks}
          handleTaskDelete={handleTaskDelete}
          handleTaskEdit={handleTaskEdit}
        ></Tasks>
        <Button variant="contained" color="primary" onClick={handleTaskAddOpen}>
          Add Task
        </Button>
        <TaskAdd
          isTaskAddOpen={isTaskAddOpen}
          handleTaskAddClose={handleTaskAddClose}
          handleTaskAdd={handleTaskAdd}
        />
      </div>
    </div>
  );
};

export default Workpackage;
