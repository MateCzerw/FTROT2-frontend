import React, { useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import "./Task.css";
import Action from "./Action/Action";
import PanToolIcon from "@material-ui/icons/PanTool";
import InfoIcon from "@material-ui/icons/Info";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TaskDetails from "./Action/TaskDetails";
import CloseIcon from "@material-ui/icons/Close";
import TaskStatusEdit from "./Action/TaskStatusEdit";
const Task = ({
  taskId,
  name,
  duration,
  status,
  workpackage,
  actions,
  dayId,
  isDone,
}) => {
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);
  const [isTaskStatusEditOpen, setIsTaskStatusEditOpen] = useState(false);

  const handleTaskDetailsOpen = () => {
    setIsTaskDetailsOpen(true);
  };

  const handleTaskDetailsClose = () => {
    setIsTaskDetailsOpen(false);
  };

  const handleTaskStatusEditOpen = () => {
    setIsTaskStatusEditOpen(true);
  };

  const handleTaskStatusEditClose = () => {
    setIsTaskStatusEditOpen(false);
  };

  return (
    <div
      className={`engineer tasks task__container ${isDone === true && "done"}`}
    >
      <div className="engineer tasks task__info">
        <p>{name}</p>
        <p>duration: {duration}h</p>
        <p>status: {status * 100}%</p>
        <p>workpackage: {workpackage}</p>
      </div>
      <div className="engineer tasks task__actions">
        <Action
          Icon={!isDone ? DoneIcon : CloseIcon}
          tooltip={!isDone ? "Done" : "set undone"}
          action={() => actions.handleSetDoneStatus(dayId, taskId)}
        ></Action>
        <Action
          Icon={PanToolIcon}
          tooltip={"On hold"}
          action={() => actions.handleOnHoldStatus(dayId, taskId)}
        ></Action>
        <Action
          Icon={TrendingUpIcon}
          tooltip={"Change status"}
          action={() => handleTaskStatusEditOpen()}
        ></Action>
        <TaskStatusEdit
          isTaskDetailsOpen={isTaskStatusEditOpen}
          handleTaskDetailsClose={handleTaskStatusEditClose}
          name={name}
          status={status}
          updateStatus={(status) =>
            actions.handleChangeStatus(dayId, taskId, status)
          }
        ></TaskStatusEdit>
        <Action
          Icon={InfoIcon}
          tooltip={"Info"}
          action={() => handleTaskDetailsOpen()}
        ></Action>
        {isTaskDetailsOpen && (
          <TaskDetails
            isTaskDetailsOpen={isTaskDetailsOpen}
            handleTaskDetailsClose={handleTaskDetailsClose}
          ></TaskDetails>
        )}
      </div>
    </div>
  );
};

export default Task;
