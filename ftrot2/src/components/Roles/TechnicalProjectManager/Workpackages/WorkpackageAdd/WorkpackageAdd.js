import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextareaAutosize,
} from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

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

const WorkpackageAdd = ({
  isWorkPackageAddOpen,
  handleAddWorkPackageClose,
  addWorkPackage,
}) => {
  const formik = useFormik({
    initialValues: {
      // // email: "foobar@example.com",
      // // password: "foobar",
      // age: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addWorkPackage(values);

      handleAddWorkPackageClose();
    },
  });

  return (
    <Dialog
      onClose={handleAddWorkPackageClose}
      aria-labelledby="customized-dialog-title"
      disableBackdropClick
      open={isWorkPackageAddOpen}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleAddWorkPackageClose}
        >
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
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
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
                return <MenuItem value={leadEngineer}>{leadEngineer}</MenuItem>;
              })}
              {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            {formik.touched.leadEngineer &&
              Boolean(formik.errors.leadEngineer) && (
                <FormHelperText>{formik.touched.leadEngineer}</FormHelperText>
              )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddWorkPackageClose} color="primary">
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

export default WorkpackageAdd;
