import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components"
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const StyledPaper = styled(Paper)`
width: 400px;
height: 400px;
& > form{
  width: 100%;
  height: 100%;
  display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center
}



`

const validationSchema = yup.object({
  email: yup
  .string("Enter your email")
  .email("Please enter valid email address")
  .required("email is required"),
  password: yup
    .string("Enter your password")
    .required("Password is required"),


});



const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return <StyledContainer>
    <StyledPaper>
      <form onSubmit={formik.handleSubmit}>
      <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>
                <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="pasword"
            value={formik.values.pasword}
            onChange={formik.handleChange}
            error={formik.touched.pasword && Boolean(formik.errors.pasword)}
            helperText={formik.touched.pasword && formik.errors.pasword}
          ></TextField>
        <Button
          autoFocus
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <Link to="/recover-password">Do not you remember the password?</Link>

        <Button
          autoFocus
          type="submit"
          variant="contained"
          color="primary"
        >
          Create account
        </Button>

      </form>
    </StyledPaper>
  </StyledContainer>;
};

export default Login;
