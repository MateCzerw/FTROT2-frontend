import { Avatar, CircularProgress, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserInfo } from "../../../../../actions/EngineerActions/boardActions";

const StyledGrid = styled(Grid)`
  min-height: 90px;
`;

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
  const contentInfo = useSelector((state) => state.engineer.userInfo);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <StyledGrid container spacing={4} justify="space-between">
      {loading && <CircularProgress color="primary" size={100} />}
      {!loading && (
        <>
          <Grid item xs={4} md={1}>
            {contentInfo.pictureUrl ? (
              <img src={contentInfo.pictureUrl} alt="User"></img>
            ) : (
              <StyledGenericAvatar variant="square" />
            )}
            {/* <StyledGenericAvatar variant="square" />
            <img src={contentInfo.pictureUrl} alt="User"></img> */}
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
                <b>Team:</b> {contentInfo.team}
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
                <b>Rework ratio:</b> {contentInfo.reworkRatio * 100}%
              </p>
              <p>
                <b>Unfinished tasks:</b> {contentInfo.unfinishedTasks}
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
                <b>Supervisor:</b> {contentInfo.supervisor}
              </p>
              <p>
                <b>Joined at:</b> {contentInfo.joinedAt}
              </p>
            </StyledInfoColumn>
          </Grid>
        </>
      )}
    </StyledGrid>
  );
};

export default UserDetails;
