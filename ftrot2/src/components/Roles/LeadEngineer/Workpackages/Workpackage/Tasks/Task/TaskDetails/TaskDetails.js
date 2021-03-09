import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const TaskDetails = ({
  description,
  assignedEngineerName,
  plannedAt,
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
        <p>
          <b>Assigned Engineer:</b> {assignedEngineerName}
        </p>
        <p>
          <b>Planned at:</b> {plannedAt ? plannedAt : "Not planned"}
        </p>
        <p>
          <b>Description:</b> {description}
        </p>
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
