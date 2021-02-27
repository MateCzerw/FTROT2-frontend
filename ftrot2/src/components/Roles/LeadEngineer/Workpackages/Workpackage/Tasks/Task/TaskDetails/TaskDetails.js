import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const TaskDetails = ({
  details,
  isTaskDetailsOpen,
  handleTaskDetailsClose,
}) => {
  // const { description, assignedEngineer, plannedAt } = details;
  return (
    <Dialog
      onClose={handleTaskDetailsClose}
      aria-labelledby="customized-dialog-title"
      disableBackdropClick
      open={isTaskDetailsOpen}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleTaskDetailsClose}
      >
        Task Details
      </DialogTitle>
      <DialogContent dividers>
        {/* <p>Assigned Engineer: {assignedEngineer}</p>
        <p>Planned at: {plannedAt ? plannedAt : "Not planned"}</p> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleTaskDetailsClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDetails;
