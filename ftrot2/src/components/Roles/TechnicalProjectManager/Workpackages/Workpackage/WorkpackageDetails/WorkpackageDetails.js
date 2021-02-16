import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const WorkpackageDetails = ({
  handleWorkpackageDetailsClose,
  isWorkpackageDetailsOpen,
}) => {
  return (
    <Dialog
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
      <DialogContent dividers>Test</DialogContent>
    </Dialog>
  );
};

export default WorkpackageDetails;
