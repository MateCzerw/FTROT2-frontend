import React from "react";
import "./Tasks.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Task from "./Task/Task";

const Tasks = ({ tasks, handleTaskDelete, handleTaskEdit }) => {
  //   console.log(tasks);
  return (
    <TableContainer className="tasks__container">
      <Table stickyHeader aria-label="sticky table">
        <TableHead className="tasks__header">
          <TableRow className="tasks__headerRow">
            <TableCell className="tasks__title--name">Name:</TableCell>
            <TableCell className="tasks__title--duration">Duration:</TableCell>
            <TableCell className="tasks__title--status">Status:</TableCell>
            <TableCell className="tasks__title--actions">Actions:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => {
            const {
              name,
              duration,
              status,
              id,
              details,
              description,
              plannedAt,
              assignedEngineerName,
            } = task;
            return (
              <Task
                name={name}
                duration={duration}
                description={description}
                plannedAt={plannedAt}
                assignedEngineerName={assignedEngineerName}
                status={status}
                id={id}
                details={details}
                handleTaskDelete={handleTaskDelete}
                handleTaskEdit={handleTaskEdit}
              ></Task>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tasks;
