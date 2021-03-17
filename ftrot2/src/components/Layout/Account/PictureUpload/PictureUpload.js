import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useFormik } from "formik";

const StyledImage = styled.img`
  height: 500px;
  object-fit: contain;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
`;

//https://www.youtube.com/watch?v=tYGTjxhzrqY
const validationSchema = yup.object({
  picture: yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    })
    .test("type", "We only support jpeg", (value) => {
      return value && value[0].type === "image/jpeg";
    }),
});

const PictureUpload = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleImgInput(values);
    },
  });
  const [picture, setPicture] = useState("");

  const handleImgInput = (values) => {
    setPicture(URL.createObjectURL(values.files[0]));
  };

  return (
    <StyledPaper>
      <input
        type="file"
        name="repeatedPassword"
        value={formik.values.picture}
        onChange={formik.handleChange.picture}
        error={formik.touched.picture && Boolean(formik.errors.picture)}
        helperText={formik.touched.picture && formik.errors.picture}
      />
      {picture && <StyledImage src={picture} alt="Picture from input" />}
    </StyledPaper>
  );
};

export default PictureUpload;
