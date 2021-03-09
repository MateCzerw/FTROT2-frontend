import React, { useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import Action from "./Action/Action";
import StopIcon from "@material-ui/icons/Stop";
import InfoIcon from "@material-ui/icons/Info";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TaskDetails from "./Action/TaskDetails";
import CloseIcon from "@material-ui/icons/Close";
import TaskStatusEdit from "./Action/TaskStatusEdit";
import styled from "styled-components";

const StyledTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f21;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  color: #93c5fd;
  opacity: ${(props) => (props.isDone ? "0.5" : "1")};
`;

const StyledTaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120px;
  & b {
    font-weight: bold;
  }
`;

const StyledTaskActions = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: solid 1px #93c5fd;
`;

const Task = ({
  taskId,
  name,
  duration,
  description,
  status,
  workpackage,
  actions,
  dayId,
  isDone,
  isOnHold,
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

  const handleSetDoneStatus = () => {
    actions.handleSetDoneStatus(dayId, taskId);
    if (isDone) handleTaskStatusEditOpen();
  };

  return (
    <StyledTaskContainer>
      <StyledTaskInfo>
        <p>{name}</p>
        <p>
          <b>duration:</b> {duration}h
        </p>
        <p>
          <b>status:</b> {status * 100}%
        </p>
        <p>
          <b>workpackage:</b> {workpackage}
        </p>
      </StyledTaskInfo>
      <StyledTaskActions>
        <Action
          Icon={!isDone ? DoneIcon : CloseIcon}
          tooltip={!isDone ? "Done" : "Set undone"}
          action={() => handleSetDoneStatus()}
        ></Action>
        <Action
          Icon={!isOnHold ? StopIcon : PlayArrowIcon}
          tooltip={!isOnHold ? "On hold" : "Start"}
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
            description={description}
            isTaskDetailsOpen={isTaskDetailsOpen}
            handleTaskDetailsClose={handleTaskDetailsClose}
          ></TaskDetails>
        )}
      </StyledTaskActions>
    </StyledTaskContainer>
  );
};

export default Task;
