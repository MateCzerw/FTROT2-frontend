import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import UserDetails from "./UserDetails/UserDetails";
import Diagrams from "./Diagrams/Diagrams";
import UsefulInformations from "./UsefulInformations/UsefulInformations";

const StyledBackground = styled.main`
  display: flex;
  padding: 10px 12px;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: #efefef;
  font-size: 14px;
`;

const Board = ({
  UsefulInformationsLeft,
  UsefulInformationsRight,
  Details,
}) => {
  return (
    <StyledBackground>
      <Grid container spacing={3} justify="center">
        <Grid item xs={8}>
          <UserDetails Details={Details} />
        </Grid>
        <Grid item container xs={8}>
          <UsefulInformations
            UsefulInformationsLeft={UsefulInformationsLeft}
            UsefulInformationsRight={UsefulInformationsRight}
          />
        </Grid>
        <Grid item xs={8}>
          <Diagrams />
        </Grid>
      </Grid>
    </StyledBackground>
  );
};

export default Board;
