import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(5, "Name should be of minimum 5 characters length")
    .required("Name is required"),
  description: yup
    .string("Enter workpackage description")
    .min(10, "Description should be of minimum 10 characters length")
    .required("Description is required"),
});

const WorkpackageEdit = ({
  handleWorkpackageEditClose,
  handleWorkpackageEdit,
  isWorkpackageEditOpen,
  id,
}) => {
  const formik = useFormik({
    initialValues: {
      // email: "foobar@example.com",
      // password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(...workpackages);
      handleWorkpackageEditClose();
      handleWorkpackageEdit(id, values);
    },
  });
  return (
    <Dialog
      onClose={handleWorkpackageEditClose}
      aria-labelledby="customized-dialog-title"
      disableBackdropClick
      open={isWorkpackageEditOpen}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleWorkpackageEditClose}
        >
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
            id="description"
            name="description"
            label="description"
            type="textarea"
            multiline
            rows={2}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleWorkpackageEditClose} color="primary">
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

export default WorkpackageEdit;
