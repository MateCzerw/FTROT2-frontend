import { Grid, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import UsefulInformationsLeft from "./UsefulInformationsLeft/UsefulInformationsLeft";
import UsefulInformationRight from "./UsefulInformationsRight/UsefulInformationRight";

const StyledPaper = styled(Paper)`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const UsefulInformations = () => {
  return (
    <StyledPaper>
      <Grid item container>
        <Grid item xs={12} md={6}>
          <UsefulInformationsLeft />
        </Grid>
        <Grid item container xs={12} md={6}>
          <UsefulInformationRight />
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default UsefulInformations;
