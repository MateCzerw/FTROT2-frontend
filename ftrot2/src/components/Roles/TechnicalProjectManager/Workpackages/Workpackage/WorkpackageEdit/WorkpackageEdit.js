import {
  Button,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextareaAutosize,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {} from "@material-ui/core";
import { getLeadEngineers } from "../../../../../../actions/TechnicalProjectManagerActions/workpackagesActions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

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

const StyledTextArea = styled(TextField)`
  & .MuiInputBase-root {
    height: 8rem;
  }
`;

const teams = ["DLSC1"];

const WorkpackageEdit = ({
  handleWorkpackageEditClose,
  handleWorkpackageEdit,
  isWorkpackageEditOpen,
  id,
}) => {
  const dispatch = useDispatch();
  const leadEngineers = useSelector(
    (state) => state.technicalProjectManager.leadEngineers
  );
  const workpackage = useSelector((state) =>
    state.technicalProjectManager.workpackages.find(
      (workpackage) => workpackage.id === id
    )
  );

  useEffect(() => {
    dispatch(getLeadEngineers());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: workpackage?.name,
      description: workpackage?.description,
      leadEngineerUsername: workpackage?.leadEngineerUsername,
      teamName: "DLSC1",
      deadline: workpackage?.deadline,
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
          Edit work package
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
            id="description"
            name="description"
            label="description"
            type="textarea"
            multiline
            rows={5}
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
              {leadEngineers.map((leadEngineer) => {
                return (
                  <MenuItem value={leadEngineer.username}>
                    {`${leadEngineer.name} ${leadEngineer.surname}`}
                  </MenuItem>
                );
              })}
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
