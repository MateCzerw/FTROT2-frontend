import React, { useState } from "react";
import {
  Button,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import TaskEdit from "./TaskEdit/TaskEdit";
import TaskDetails from "./TaskDetails/TaskDetails";
import styled from "styled-components";

const StyledTask = styled(TableRow)`
  background-color: #1e1f21;

  & td {
    background-color: #1e1f21;
    color: #93c5fd;
  }
`;

const StyledTaskActions = styled(TableCell)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & > button {
    color: #93c5fd;
  }
`;

const Task = ({
  name,
  duration,
  status,
  description,
  id,
  plannedAt,
  assignedEngineerName,
  handleTaskDelete,
  handleTaskEdit,
}) => {
  const [isTaskEditOpen, setIsTaskEditOpen] = useState(false);
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);

  const handleTaskEditOpen = () => {
    setIsTaskEditOpen(true);
  };

  const handleTaskEditClose = () => {
    setIsTaskEditOpen(false);
  };

  const handleTaskDetailsOpen = () => {
    setIsTaskDetailsOpen(true);
  };

  const handleTaskDetailsClose = () => {
    setIsTaskDetailsOpen(false);
  };

  return (
    <StyledTask role="checkbox" tabIndex={-1} key={id}>
      <TableCell>{name}</TableCell>
      <TableCell>{duration}h</TableCell>
      <TableCell>{status * 100}%</TableCell>
      <StyledTaskActions>
        <Tooltip title="Task Details" onClick={handleTaskDetailsOpen}>
          <IconButton aria-label="task details">
            <AssignmentIcon></AssignmentIcon>
          </IconButton>
        </Tooltip>
        <TaskDetails
          isTaskDetailsOpen={isTaskDetailsOpen}
          handleTaskDetailsClose={handleTaskDetailsClose}
          plannedAt={plannedAt}
          assignedEngineerName={assignedEngineerName}
          description={description}
        ></TaskDetails>

        <Tooltip title="Task Edit">
          <IconButton aria-label="Task Edit" onClick={handleTaskEditOpen}>
            <EditIcon></EditIcon>
          </IconButton>
        </Tooltip>
        <TaskEdit
          isTaskEditOpen={isTaskEditOpen}
          handleTaskEditClose={handleTaskEditClose}
          name={name}
          duration={duration}
          description={description}
          id={id}
          handleTaskEdit={handleTaskEdit}
        ></TaskEdit>
        <Tooltip title="Task Delete">
          <IconButton
            aria-label="Task Delete"
            onClick={() => handleTaskDelete(id)}
          >
            <DeleteForeverIcon></DeleteForeverIcon>
          </IconButton>
        </Tooltip>
      </StyledTaskActions>
    </StyledTask>
  );
};

export default Task;
