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
const userInfo = {
  email: "mateczerw@gmail.com",
  name: "Mateusz",
  surname: "Czerwiński",
  dateOfBirth: moment().subtract(30, "years").format("YYYY-MM-DD"),
};

const validationSchema = yup.object({
  // name: yup
  //   .string("Enter your name")
  //   .min(5, "Name should be of minimum 5 characters length")
  //   .required("Name is required"),
  // description: yup
  //   .string("Enter workpackage description")
  //   .min(10, "Description should be of minimum 10 characters length")
  //   .required("Description is required"),
});

const Information = () => {
  const formik = useFormik({
    initialValues: {
      email: userInfo.email,
      name: userInfo.name,
      surname: userInfo.surname,
      date: userInfo.dateOfBirth,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Paper elevation={3}>
      <Title>Informations:</Title>
      <form onSubmit={formik.handleSubmit}>
        <div>
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
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          ></StyledTextField>
        </div>
        <div>
          <StyledTextField
            label="Surname"
            variant="outlined"
            type="text"
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          ></StyledTextField>
          <StyledTextField
            label="Date of birth"
            variant="outlined"
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          ></StyledTextField>
        </div>
        <StyledButton variant="contained" color="primary" type="submit">
          UPDATE
        </StyledButton>
      </form>
      <h6>{userInfo.dateOfBirth}</h6>
    </Paper>
  );
};

export default Information;
