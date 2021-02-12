import { Button, Divider, Paper, TextField } from "@material-ui/core";
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
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  display:flex;
flex-direction: column;
align-items: center
}
`


const StyledTextField = styled(TextField)`
margin-top: 5px;
width: 100%;

& .MuiInputBase-root{
height: 50px;

& .MuiInputBase-input{
  font-size: 1.5rem;
}
}
`

const StyledButton = styled(Button)`
width: calc(100% - 20px);
margin: 5px 5px;
height:  50px;
padding: 10px;


`


const StyledLink = styled(Link)`
margin: 10px 0;
text-decoration: none;
color: #efefef;
`



const validationSchema = yup.object({
  email: yup
  .string("Enter your email")
  .email("Please enter valid email address")
  .required("Email is required"),
  password: yup
    .string()
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
      <StyledTextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
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
        >
          Login
        </StyledButton>
        <Divider></Divider>
        <StyledLink to="/recover-password">Do you remember the password?</StyledLink>
    
        <StyledButton
          autoFocus
          type="submit"
          variant="contained"
          
        >
          Create account
        </StyledButton>

      </form>
    </StyledPaper>
  </StyledContainer>;
};

export default Login;
