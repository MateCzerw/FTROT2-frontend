import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Task from "./Task/Task";

const StyledTableContainer = styled(TableContainer)`
  max-height: 300px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTableRow = styled(TableRow)`
  & .MuiTableCell-stickyHeader {
    background-color: #303133;
    color: #c0c0c0;
  }
`;

const StyledActionsCell = styled(TableCell)`
  padding-left: 100px;
`;

const Tasks = ({ tasks, handleTaskDelete, handleTaskEdit }) => {
  //   console.log(tasks);
  return (
    <StyledTableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <StyledTableRow>
            <TableCell>Name:</TableCell>
            <TableCell>Duration:</TableCell>
            <TableCell>Status:</TableCell>
            <StyledActionsCell>Actions:</StyledActionsCell>
          </StyledTableRow>
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
    </StyledTableContainer>
  );
};

export default Tasks;
