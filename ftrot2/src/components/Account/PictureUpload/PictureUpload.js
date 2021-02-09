import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 500px;
  object-fit: contain;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
`;

const PictureUpload = () => {
  const [picture, setPicture] = useState("");

  const handleImgInput = (event) => {
    setPicture(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <StyledPaper>
      <input type="file" onChange={handleImgInput} />
      {picture && <StyledImage src={picture} alt="Picture from input" />}
    </StyledPaper>
  );
};

export default PictureUpload;
