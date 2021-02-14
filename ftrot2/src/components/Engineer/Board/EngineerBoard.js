import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import UsefulInformationsLeft from "./UsefulInformations/UsefulInformationsLeft/UsefulInformationsLeft";
import UsefulInformationRight from "./UsefulInformations/UsefulInformationsRight/UsefulInformationRight";
import Diagrams from "./Diagrams/Diagrams";

const StyledBackground = styled.main`
  display: flex;
  padding: 10px 12px;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: #efefef;
  font-size: 14px;
`;

const StyledUsefulInformations = styled(Paper)`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const EngineerBoard = () => {
  return (
    <StyledBackground>
      <Grid container spacing={3} justify="center">
        {/* <section className="engineer board board__container"> */}
        <Grid item xs={8}>
          <UserDetails />
        </Grid>
        <Grid item container xs={8}>
          <StyledUsefulInformations>
            <Grid item container>
              <Grid item xs={12} md={6}>
                <UsefulInformationsLeft />
              </Grid>
              <Grid item container xs={12} md={6}>
                <UsefulInformationRight />
              </Grid>
            </Grid>
          </StyledUsefulInformations>
        </Grid>
        <Grid item xs={8}>
          <Diagrams></Diagrams>
        </Grid>
      </Grid>
    </StyledBackground>
  );
};

export default EngineerBoard;
