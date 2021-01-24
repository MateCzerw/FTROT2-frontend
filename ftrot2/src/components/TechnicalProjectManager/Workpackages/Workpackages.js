import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextareaAutosize,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Workpackage from "./Workpackage/Workpackage";
import "./Workpackages.css";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import moment from "moment";

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
  leadEngineer: yup
    .string("Enter lead engineer name")
    .required("Lead engineer is required"),
});

const leadEngineers = [
  "Mateusz Czerwiński",
  "Bartosz Kozłowski",
  "Adam Małysz",
  "Kamil Nowak",
  "Jan Kowalski",
];

const Workpackages = () => {
  const [workpackages, setWorkpackages] = useState([]);
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      // // email: "foobar@example.com",
      // // password: "foobar",
      // age: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setWorkpackages([...workpackages, values]);
      handleClose();
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleWorkpackageDelete = (id) => {
    setWorkpackages(workpackages.filter((item) => item.id !== id));
  };

  const handleWorkpackageEdit = (id, workpackage) => {
    setWorkpackages(
      workpackages.map((item) => {
        if (item.id === id) return workpackage;
        else return item;
      })
    );
  };

  useEffect(() => {
    const initialState = [
      {
        id: 1,
        name: "HMC",
        tasksQuantity: 5,
        finishedTasks: 3,
        endDate: moment(Date.now()).calendar(),
        predictedFinish: moment(Date.now()).calendar(),
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet, reprehenderit amet sint possimus est? Tempora doloribus quis nam quos ut iste, obcaecati sed eaque odit! Perspiciatis sapiente recusandae illo.",
      },
      {
        id: 2,
        name: "Volvo",
        tasksQuantity: 5,
        finishedTasks: 3,
        endDate: moment(Date.now()).calendar(),
        predictedFinish: moment(Date.now()).calendar(),
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet, reprehenderit amet sint possimus est? Tempora doloribus quis nam quos ut iste, obcaecati sed eaque odit! Perspiciatis sapiente recusandae illo.",
      },
      {
        id: 3,
        name: "BMC",
        tasksQuantity: 5,
        finishedTasks: 3,
        endDate: moment(Date.now()).calendar(),
        predictedFinish: moment(Date.now()).calendar(),
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet, reprehenderit amet sint possimus est? Tempora doloribus quis nam quos ut iste, obcaecati sed eaque odit! Perspiciatis sapiente recusandae illo.",
      },
    ];
    setWorkpackages(initialState);
  }, []);

  return (
    <div className="tpjm workpackages">
      <div className="tpjm workpackages__container">
        <div className="tpjm workpackages__header">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Add new Workpackage
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            disableBackdropClick
            open={open}
          >
            <form onSubmit={formik.handleSubmit}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Modal title
              </DialogTitle>
              <DialogContent dividers>
                {/* <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                /> */}

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
                <FormControl fullWidth>
                  <InputLabel id="lead-engineer">Lead Engineer</InputLabel>
                  <Select
                    labelId="lead-engineer"
                    label="leadEngineer"
                    name="leadEngineer"
                    value={formik.values.leadEngineer}
                    fullWidth
                    onChange={formik.handleChange}
                  >
                    {leadEngineers.map((leadEngineer) => {
                      return (
                        <MenuItem value={leadEngineer}>{leadEngineer}</MenuItem>
                      );
                    })}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                  {formik.touched.leadEngineer &&
                    Boolean(formik.errors.leadEngineer) && (
                      <FormHelperText>
                        {formik.touched.leadEngineer}
                      </FormHelperText>
                    )}
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button autoFocus type="submit" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </form>
          </Dialog>
          <div className=" tpjm workpackages__titleContainer">
            <h2>Workpackages</h2>
          </div>
        </div>
        {workpackages.map((workpackage) => (
          <Workpackage
            id={workpackage.id}
            name={workpackage.name}
            tasksQuantity={workpackage.tasksQuantity}
            finishedTasks={workpackage.finishedTasks}
            endDate={workpackage.endDate}
            predictedFinish={workpackage.predictedFinish}
            description={workpackage.description}
            handleWorkpackageDelete={handleWorkpackageDelete}
            handleWorkpackageEdit={handleWorkpackageEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Workpackages;
