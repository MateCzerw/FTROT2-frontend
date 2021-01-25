import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const TaskDetails = ({ isTaskDetailsOpen, handleTaskDetailsClose }) => {
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
        Modal title
      </DialogTitle>
      <DialogContent dividers>tekst testowy</DialogContent>
      <DialogActions>
        <Button onClick={handleTaskDetailsClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDetails;
