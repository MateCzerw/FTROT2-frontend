import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Task from "./Task/Task";
import "./Workpackage.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

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

const initialState = [
  {
    name: "CAD model of pedal",
    duration: 2,
  },
  {
    name: "FEM of housing",
    duration: 2,
  },
  {
    name: "DFMEA",
    duration: 2,
  },
  {
    name: "Design review",
    duration: 10,
  },
  {
    name: "meeting with supplier",
    duration: 2,
  },
];

const Workpackage = ({
  id,
  name,
  tasksQuantity,
  finishedTasks,
  pid,
  endDate,
  predictedFinish,
  description,
  handleWorkpackageDelete,
  handleWorkpackageEdit,
}) => {
  const [tasks, setTasks] = useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleAddTaskOpen = () => {
    setIsAddTaskOpen(true);
  };
  const handleAddTaskClose = () => {
    setIsAddTaskOpen(false);
  };

  useEffect(() => {
    setTasks(initialState);
  }, []);

  const formik = useFormik({
    initialValues: {
      // email: "foobar@example.com",
      // password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(...workpackages);
      handleAddTaskClose();
      // handleWorkpackageEdit(id, values);
    },
  });

  return (
    //formik
    <div className="leadEngineer workpackage">
      <div className="leadEngineer workpackage__details">
        <div className="leadEngineer workpackage__info">
          <h3>Name: {name}</h3>
          <h4>PID: {pid}</h4>
          <h4>finished tasks: {finishedTasks}</h4>
          <h4>Due to: {endDate}</h4>
          <h4>Predicted due to: {predictedFinish}</h4>
        </div>
        <div className="leadEngineer workpackage__description">
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="leadEngineer workpackage__tasks">
        <h3>Tasks:</h3>
        {tasks.map((task) => {
          const { name, duration } = task;
          return <Task name={name} duration={duration}></Task>;
        })}
        <Button variant="contained" color="primary" onClick={handleAddTaskOpen}>
          Add Task
        </Button>

        <Dialog
          onClose={handleAddTaskClose}
          aria-labelledby="customized-dialog-title"
          disableBackdropClick
          open={isAddTaskOpen}
        >
          <form onSubmit={formik.handleSubmit}>
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleAddTaskClose}
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
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAddTaskClose} color="primary">
                Cancel
              </Button>
              <Button autoFocus type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default Workpackage;
