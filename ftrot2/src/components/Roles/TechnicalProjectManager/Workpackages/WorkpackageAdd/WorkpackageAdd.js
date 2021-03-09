import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextareaAutosize,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(5, "Name should be of minimum 5 characters length")
    .required("Name is required"),
  description: yup
    .string("Enter workpackage description")
    .min(10, "Description should be of minimum 10 characters length")
    .required("Description is required"),
  leadEngineerUsername: yup
    .string("Choose lead engineer")
    .required("Lead engineer is required"),
  teamName: yup.string("Choose team").required("Team is required"),
  deadline: yup.date("Enter date format").required("Team is required"),
});

const leadEngineers = ["user3"];
const teams = ["DLSC1"];

const WorkpackageAdd = ({
  isWorkPackageAddOpen,
  handleAddWorkPackageClose,
  addWorkPackage,
}) => {
  const formik = useFormik({
    initialValues: {},
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
              label="Lead Engineer"
              name="leadEngineerUsername"
              value={formik.values.leadEngineerUsername}
              fullWidth
              onChange={formik.handleChange}
            >
              {leadEngineers.map((leadEngineerUsername) => {
                return (
                  <MenuItem value={leadEngineerUsername}>
                    {leadEngineerUsername}
                  </MenuItem>
                );
              })}
              {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            {formik.touched.leadEngineerUsername &&
              Boolean(formik.errors.leadEngineerUsername) && (
                <FormHelperText>
                  {formik.touched.leadEngineerUsername}
                </FormHelperText>
              )}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="team">Team</InputLabel>
            <Select
              labelId="teamName"
              label="teamName"
              name="teamName"
              value={formik.values.teamName}
              fullWidth
              onChange={formik.handleChange}
            >
              {teams.map((team) => {
                return <MenuItem value={team}>{team}</MenuItem>;
              })}
              {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            {formik.touched.teamName && Boolean(formik.errors.teamName) && (
              <FormHelperText>{formik.touched.teamName}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="deadline"
              label="deadline"
              type="date"
              value={formik.values.deadline}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={formik.handleChange}
            />
            {formik.touched.deadline && Boolean(formik.errors.deadline) && (
              <FormHelperText>{formik.touched.deadline}</FormHelperText>
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
