import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledDialog = styled(Dialog)`
  & .MuiDialog-paperWidthSm {
    width: 900px;
  }
`;

const StyledTableContainer = styled(TableContainer)`
  max-height: 600px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTableRow = styled(TableRow)`
  & .MuiTableCell-stickyHeader {
    background-color: #262729;
    color: #c0c0c0;
  }
`;

const StyledTask = styled(TableRow)`
  background-color: #1e1f21;

  & td {
    background-color: #1e1f21;
    color: #93c5fd;
  }
`;

const WorkpackageDetails = ({
  handleWorkpackageDetailsClose,
  isWorkpackageDetailsOpen,
  id,
}) => {
  const workpackages = useSelector((state) =>
    state.technicalProjectManager.workpackages.find(
      (workpackage) => workpackage.id === id
    )
  );

  return (
    <StyledDialog
      onClose={handleWorkpackageDetailsClose}
      aria-labelledby="customized-dialog-title"
      open={isWorkpackageDetailsOpen}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleWorkpackageDetailsClose}
      >
        Tasks Status
      </DialogTitle>
      <DialogContent dividers>
        <StyledTableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableRow>
                <TableCell>Id:</TableCell>
                <TableCell>Name:</TableCell>
                <TableCell>Duration:</TableCell>
                <TableCell>Status:</TableCell>
                <TableCell>Engineer:</TableCell>
                <TableCell>Planned at:</TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {workpackages?.tasks.map((task, index) => {
                return (
                  <StyledTask role="checkbox" tabIndex={-1} key={id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.duration}h</TableCell>
                    <TableCell>{task.status * 100}%</TableCell>
                    <TableCell>{task.assignedEngineerName}</TableCell>
                    <TableCell>{task.plannedAt}</TableCell>
                  </StyledTask>
                );
              })}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </DialogContent>
    </StyledDialog>
  );
};

export default WorkpackageDetails;
