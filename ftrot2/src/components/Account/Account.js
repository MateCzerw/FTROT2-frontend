import { Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import Information from "./Information/Information";
import Password from "./Password/Password";
import styled from "styled-components";

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 8px 0 8px;
  display: flex;

  justify-content: center;
  align-items: flex-start;
`;

const Account = () => {
  return (
    <StyledBackground>
      <Grid container spacing={1} justify={"center"}>
        <Grid item container xs={12} justify={"center"}>
          <Grid item xs={12} sm={6}>
            <Information />
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Password></Password>
        </Grid> */}
      </Grid>
    </StyledBackground>
  );
};

export default Account;
