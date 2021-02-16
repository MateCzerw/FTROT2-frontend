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
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  width: 900px;
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

const StyledDetails = styled.div`
  align-self: center;
  width: 500px;

  & > p {
    font-size: 1.5rem;
  }
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
  width: ${(props) => (props.loginButton ? "calc(100% - 20px)" : "60%")};
  margin: 5px 5px;
  height: 50px;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  margin: 10px 0;
  text-decoration: none;
  color: #efefef;
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
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
          <StyledDetails>
            <h1>First time right on time</h1>
            <p>
              FTROT2 is a work management application at ZF that implements the
              product engineering process from PEP guideline.
            </p>
          </StyledDetails>
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

            <StyledButton
              autoFocus
              type="submit"
              variant="contained"
              color="primary"
              loginButton
            >
              Login
            </StyledButton>
            <Divider></Divider>
            <StyledLink to="/recover-password">
              Do you remember the password?
            </StyledLink>

            <StyledButton autoFocus type="submit" variant="contained">
              Create account
            </StyledButton>
          </StyledForm>
        </StyledPaper>
      </StyledContainer>
    </>
  );
};

export default Login;
