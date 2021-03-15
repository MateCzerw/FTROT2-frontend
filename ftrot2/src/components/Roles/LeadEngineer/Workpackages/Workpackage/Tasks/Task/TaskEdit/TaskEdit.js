import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";

const StyledTextArea = styled(TextField)`
  & .MuiInputBase-root {
    height: 8rem;
  }

  & .MuiInputBase-input {
    height: 6rem;
  }
`;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(5, "Name should contain minimum 5 characters length")
    .required("Task name is required"),
  description: yup
    .string()
    .min(10, "Description should contain minimum 10 characters length")
    .max(50, "Description should contain maximum 50 characters length")
    .required("Task name is required"),
  duration: yup
    .number()
    .min(0.5, "Duration should last minimum 0,5h")
    .max(8, "Task should last maximum 8h")
    .required("Duration is required"),
});

const TaskEdit = ({
  id,
  name,
  duration,
  description,
  isTaskEditOpen,
  handleTaskEditClose,
  handleTaskEdit,
}) => {
  const formik = useFormik({
    initialValues: {
      name,
      duration,
      description,
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
          Edit task - {name}
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
          <StyledTextArea
            fullWidth
            multiline
            rows={3}
            id="description"
            name="description"
            label="description"
            type="textarea"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
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
