import { Button, Paper, TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Formik, useFormik } from "formik";

const StyledImage = styled.img`
  height: 500px;
  object-fit: contain;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
`;

//https://www.youtube.com/watch?v=tYGTjxhzrqY
const validationSchema = yup.object().shape({
  file: yup
    .mixed()
    .required("You need to provide a file")
    .test("size", "The file is too large", (value) => {
      return value && value.size <= 2000000;
    })
    .test("type", "We only support jpeg", (value) => {
      return value && value.type === "image/jpeg";
    }),
});

const PictureUpload = () => {
  return (
    <StyledPaper>
      <Formik
        initialValues={{ file: null }}
        onSubmit={(values) => {
          console.log(values);
          // alert(
          //   JSON.stringify(
          //     {
          //       fileName: values.file.name,
          //       type: values.file.type,
          //       size: `${values.file.size} bytes`,
          //     },
          //     null,
          //     2
          //   )
          // );
        }}
        validationSchema={validationSchema}
        render={({ values, handleSubmit, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </form>
          );
        }}
      />
    </StyledPaper>
  );
};

export default PictureUpload;
