import {
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledForm = styled.form`
  padding: 20px 10px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  margin-top: 5px;
  width: 100%;

  & .MuiInputBase-root {
    height: 50px;

    & .MuiInputBase-input {
      font-size: 1.5rem;
    }
  }
`;

const StyledButton = styled(Button)`
  width: calc(100% - 20px);
  margin: 5px 5px;
  height: 50px;
  padding: 10px;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: 999;
`;

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Please enter valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same"),
  }),
});
const Register = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
      console.log(values);
    },
  });
  return (
    <>
      <StyledBackdrop open={loading}>
        <CircularProgress color="primary" size={200} />
      </StyledBackdrop>
      <StyledContainer>
        <StyledPaper>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledTextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              autoComplete="none"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            ></StyledTextField>

            <StyledTextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            ></StyledTextField>
            <StyledTextField
              label="Confirm password"
              variant="outlined"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            ></StyledTextField>

            <StyledButton
              autoFocus
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </StyledButton>
          </StyledForm>
        </StyledPaper>
      </StyledContainer>
    </>
  );
};

export default Register;
