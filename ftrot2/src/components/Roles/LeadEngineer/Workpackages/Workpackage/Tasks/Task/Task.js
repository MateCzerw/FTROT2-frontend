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

import "./Task.css";
import TaskEdit from "./TaskEdit/TaskEdit";
import TaskDetails from "./TaskDetails/TaskDetails";
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
    <TableRow role="checkbox" tabIndex={-1} key={id} className="tasks__task">
      <TableCell>{name}</TableCell>
      <TableCell>{duration}h</TableCell>
      <TableCell>{status * 100}%</TableCell>
      <TableCell className="tasks__actions">
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
      </TableCell>
    </TableRow>
  );
};

export default Task;
