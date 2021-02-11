import React from "react";
import styled from "styled-components";
import moment from "moment";
import * as yup from "yup";
import { Button, Paper, TextField } from "@material-ui/core";
import { useFormik } from "formik";

const Title = styled.h3`
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

const StyledTextField = styled(TextField)`
  margin-top: 10px;
  width: 50%;
`;

const StyledButton = styled(Button)`
  margin: 10px 10px 0px 10px;
  width: calc(100% - 20px);
`;

const validationSchema = yup.object({
  newPassword: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  repeatedPassword: yup
    .string("Enter your password")
    // .oneOf([newPassword], 'Passwords are not the same!')
    .required("Password is required"),
  currentPassword: yup
    .string("Enter your current passowrd")
    .required("Current password is required"),
});

const Password = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Paper elevation={3}>
      <Title>Password:</Title>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <StyledTextField
            label="New password"
            variant="outlined"
            type="password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          ></StyledTextField>
          <StyledTextField
            label="Repeated Password"
            variant="outlined"
            type="password"
            name="repeatedPassword"
            value={formik.values.repeatedPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.repeatedPassword &&
              Boolean(formik.errors.repeatedPassword)
            }
            helperText={
              formik.touched.repeatedPassword && formik.errors.repeatedPassword
            }
          ></StyledTextField>
        </div>
        <div>
          <StyledTextField
            label="Current password"
            variant="outlined"
            type="password"
            name="currentPassword"
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.currentPassword &&
              Boolean(formik.errors.currentPassword)
            }
            helperText={
              formik.touched.currentPassword && formik.errors.currentPassword
            }
          ></StyledTextField>
        </div>
        <StyledButton
          autoFocus
          type="submit"
          variant="contained"
          color="primary"
        >
          UPDATE
        </StyledButton>
      </form>
    </Paper>
  );
};

export default Password;
