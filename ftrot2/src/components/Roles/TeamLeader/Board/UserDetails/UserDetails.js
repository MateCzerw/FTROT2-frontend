import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledInfoColumn = styled(Grid)`
  font-size: 20px;
  & b {
    color: #b0b0b0;
    font-weight: bolder;
  }
`;

const UserDetails = () => {
  const contentInfo = useSelector((state) => state.teamLeader.userInfo);
  return (
    <Grid container spacing={4} justify="space-between">
      <Grid item xs={4} md={1}>
        <img src={contentInfo.picture} alt="User"></img>
      </Grid>
      <Grid item container xs={8} md={11} justify="space-around">
        <StyledInfoColumn
          item
          container
          xs={12}
          sm={6}
          xl={3}
          justify="flex-start"
          direction="column"
        >
          <p>
            <b>Name:</b> {contentInfo.name}
          </p>
          <p>
            <b>Surname:</b> {contentInfo.surname}
          </p>
        </StyledInfoColumn>
        <StyledInfoColumn
          item
          container
          justify="flex-start"
          xs={12}
          sm={6}
          xl={3}
          direction="column"
        >
          <p>
            <b>Joined at:</b> {contentInfo.joinedAt}
          </p>
          <p>
            <b>Role:</b> {contentInfo.role}
          </p>
        </StyledInfoColumn>
        <StyledInfoColumn
          item
          container
          justify="flex-start"
          xs={12}
          sm={6}
          xl={3}
          direction="column"
        >
          <p>
            <b>Team:</b> {contentInfo.team}
          </p>
          <p>
            <b>Supervisor:</b> {contentInfo.supervisor}
          </p>
        </StyledInfoColumn>
        <StyledInfoColumn
          item
          container
          justify="flex-start"
          xs={12}
          sm={6}
          xl={3}
          direction="column"
        >
          <p>
            <b>Team members:</b> {contentInfo.teamMembersQuantity}
          </p>
          <p>
            <b>Unfinished workpackages:</b>
            {contentInfo.workPackagesInProgress}
          </p>
        </StyledInfoColumn>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
