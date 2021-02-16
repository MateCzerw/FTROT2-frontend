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
  const contentInfo = useSelector((state) => state.leadEngineer.userInfo);
  return (
    <Grid container spacing={4} justify="space-between">
      <Grid item xs={4} md={1}>
        <img
          src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="Mateusz Czerwiński"
        ></img>
      </Grid>
      <Grid item container xs={8} md={11} justify="space-around">
        <StyledInfoColumn
          item
          container
          xs={12}
          sm={6}
          xl={3}
          justify="flex-start"
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
        >
          <p>
            <b>Team:</b> {contentInfo.joinedAt}
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
        >
          <p>
            <b>Team:</b> {contentInfo.team}
          </p>
          <p>
            <b>Supervisor:</b>
            {contentInfo.supervisor}
          </p>
        </StyledInfoColumn>
        <StyledInfoColumn
          item
          container
          justify="flex-start"
          xs={12}
          sm={6}
          xl={3}
        >
          <p>
            <b>Finished workpackages:</b> {contentInfo.finishedWorkpackages}
          </p>
          <p>
            <b>Unfinished workpackages:</b>
            {contentInfo.unFinishedWorkpackages}
          </p>
        </StyledInfoColumn>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
