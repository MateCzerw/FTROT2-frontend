import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Workpackage.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";

const validationSchema = yup.object({
  // email: yup
  //   .string("Enter your email")
  //   .email("Enter a valid email")
  //   .required("Email is required"),
  // password: yup
  //   .string("Enter your password")
  //   .min(8, "Password should be of minimum 8 characters length")
  //   .required("Password is required"),
  name: yup
    .string("Enter your name")
    .min(5, "Name should be of minimum 5 characters length")
    .required("Name is required"),
  description: yup
    .string("Enter workpackage description")
    .min(10, "Description should be of minimum 10 characters length")
    .required("Description is required"),
});
const Workpackage = ({
  id,
  name,
  tasksQuantity,
  finishedTasks,
  endDate,
  predictedFinish,
  description,
  handleWorkpackageDelete,
  handleWorkpackageEdit,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleEditOpen = () => {
    setIsEditOpen(true);
  };
  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  const handleDetailsOpen = () => {
    setIsDetailsOpen(true);
  };

  const handleDetailsClose = () => {
    setIsDetailsOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      // email: "foobar@example.com",
      // password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(...workpackages);
      handleEditClose();
      handleWorkpackageEdit(id, values);
    },
  });

  return (
    <div className="tpjm workpackage">
      <div className="tpjm workpackage__details">
        <h3>Name: {name}</h3>
        <h4>Id: {id}</h4>
        <h4>Tasks quantity: {tasksQuantity}</h4>
        <h4>finished tasks: {finishedTasks}</h4>
        <h4>Due to: {endDate}</h4>
        <h4>Predicted due to: {predictedFinish}</h4>
      </div>
      <div className="tpjm workpackage__description">
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className="tpjm workpackage__actions">
        <Button variant="contained" color="primary" onClick={handleDetailsOpen}>
          Details
        </Button>
        <Dialog
          onClose={handleEditClose}
          aria-labelledby="customized-dialog-title"
          disableBackdropClick
          open={isDetailsOpen}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleDetailsClose}
          >
            Tasks Status
          </DialogTitle>
          <DialogContent dividers></DialogContent>
          <DialogActions>
            <Button onClick={handleDetailsClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Button variant="contained" onClick={handleEditOpen}>
          Edit
        </Button>
        <Dialog
          onClose={handleEditClose}
          aria-labelledby="customized-dialog-title"
          disableBackdropClick
          open={isEditOpen}
        >
          <form onSubmit={formik.handleSubmit}>
            <DialogTitle id="customized-dialog-title" onClose={handleEditClose}>
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
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEditClose} color="primary">
                Cancel
              </Button>
              <Button autoFocus type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
          )}
        </Dialog>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleWorkpackageDelete(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Workpackage;
