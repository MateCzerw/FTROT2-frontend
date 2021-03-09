import { Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  margin: 10px 0;
  padding: 10px;
  background-color: #1d1d1f;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & img {
    object-fit: fill;
    width: 100px;
    border-radius: 10%;
  }
`;

const UserDetails = ({ Details }) => {
  const contentInfo = useSelector((state) => state.engineer.userInfo);
  return (
    <StyledPaper>
      <Details />
    </StyledPaper>
  );
};

export default UserDetails;
