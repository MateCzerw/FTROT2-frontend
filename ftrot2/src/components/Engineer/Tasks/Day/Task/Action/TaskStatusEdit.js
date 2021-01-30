import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
} from "@material-ui/core";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 10,
    label: "10%",
  },
  {
    value: 20,
    label: "20%",
  },
  {
    value: 30,
    label: "30%",
  },
  {
    value: 40,
    label: "40%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 60,
    label: "70%",
  },
  {
    value: 70,
    label: "70%",
  },
  {
    value: 80,
    label: "80%",
  },
  {
    value: 90,
    label: "90%",
  },
  {
    value: 100,
    label: "100%",
  },
];

const TaskStatusEdit = ({
  isTaskDetailsOpen,
  handleTaskDetailsClose,
  status,
  name,
  updateStatus,
}) => {
  const [sliderStatus, setSliderStatus] = useState(status);
  const handleSubmitValue = () => {
    updateStatus(sliderStatus / 100);
    handleTaskDetailsClose();
  };

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
        <p>Change task status</p>
      </DialogTitle>
      <DialogContent dividers>
        <p>Task: {name}</p>
        <Slider
          defaultValue={status * 100}
          // getAriaValueText={}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks={marks}
          onChangeCommitted={(e, value) => setSliderStatus(value)}
          // min={10}
          // max={100}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmitValue} color="primary">
          Submit
        </Button>
        <Button onClick={handleTaskDetailsClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskStatusEdit;
