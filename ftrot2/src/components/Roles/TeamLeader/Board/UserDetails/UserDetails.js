import { Avatar, Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTeamLeaderBoardInfo } from "../../../../../actions/TeamLeaderActions/boardActions";

const StyledInfoColumn = styled(Grid)`
  font-size: 20px;
  & b {
    color: #b0b0b0;
    font-weight: bolder;
  }
`;

const StyledGenericAvatar = styled(Avatar)`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

const UserDetails = () => {
  const contentInfo = useSelector((state) => state.teamLeader.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeamLeaderBoardInfo());
  }, []);

  return (
    <Grid container spacing={4} justify="space-between">
      <Grid item xs={4} md={1}>
        {contentInfo.pictureUrl ? (
          <img src={contentInfo.pictureUrl} alt="User"></img>
        ) : (
          <StyledGenericAvatar variant="square" />
        )}
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
            <b>Joined at: </b> {contentInfo.joinedAt}
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
            <b>Team: </b> {contentInfo.team}
          </p>
          <p>
            <b>Supervisor: </b> {contentInfo.supervisor}
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
            <b>Team members: </b> {contentInfo.teamMembersQuantity}
          </p>
          <p>
            <b>Unfinished workpackages: </b>
            {contentInfo.unfinishedWorkPackages}
          </p>
        </StyledInfoColumn>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
