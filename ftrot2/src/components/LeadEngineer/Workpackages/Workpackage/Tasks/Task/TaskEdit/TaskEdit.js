import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(5, "Name should contain minimum 5 characters length")
    .required("Task name is required"),
  duration: yup
    .number()
    .min(0.5, "Duration should last minimum 0,5h")
    .max(8, "Task should last maximum 8h")
    .required("Duration is required"),
  status: yup
    .number()
    .min(0, "Status should be minimum 0")
    .max(1, "Status should be maximum 1")
    .required("Status is required"),
});

const TaskEdit = ({
  id,
  name,
  duration,
  status,
  isTaskEditOpen,
  handleTaskEditClose,
  handleTaskEdit,
}) => {
  const formik = useFormik({
    initialValues: {
      name,
      duration,
      status,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleTaskEditClose();
      handleTaskEdit(id, values);
    },
  });

  return (
    <Dialog
      onClose={handleTaskEditClose}
      aria-labelledby="customized-dialog-title"
      disableBackdropClick
      open={isTaskEditOpen}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="customized-dialog-title" onClose={handleTaskEditClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="duration"
            name="duration"
            label="duration"
            type="number"
            value={formik.values.duration}
            onChange={formik.handleChange}
            error={formik.touched.duration && Boolean(formik.errors.duration)}
            helperText={formik.touched.duration && formik.errors.duration}
          />
          <TextField
            fullWidth
            id="status"
            name="status"
            label="status"
            type="number"
            value={formik.values.status}
            onChange={formik.handleChange}
            error={formik.touched.status && Boolean(formik.errors.status)}
            helperText={formik.touched.status && formik.errors.status}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTaskEditClose} color="primary">
            Cancel
          </Button>
          <Button autoFocus type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskEdit;
