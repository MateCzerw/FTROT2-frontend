import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #27272a;
  color: #fff;
  width: 100%;
  min-height: 58px;
`;

const StyledPlug = styled.header`
  width: 48px;
  height: 100%;
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${(props) =>
    props.isDrawerOpen ? "translateX(160px)" : "translateX(0px)"};
`;

const StyledIconButton = styled(IconButton)`
  color: white;
  &:hover {
    background-color: #c0c0c0;
  }
`;

const StyledHeaderTitle = styled.div`
  & > h1 {
    padding: 0;
    margin: 0;
  }
`;

const StyledHeaderIcons = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const StyledAppsIcon = styled(AppsIcon)`
  margin-right: 8px;
  object-fit: contain;
  height: 30px;
  width: 30px;
`;

const StyledNotificationsIcon = styled(NotificationsIcon)`
  margin-right: 8px;
  object-fit: contain;
  height: 30px;
  width: 30px;
`;

const Header = ({ handleDrawerOpen, isDrawerOpen, handleLogOut }) => {
  return (
    <StyledHeader>
      <StyledHeaderLeft isDrawerOpen={isDrawerOpen}>
        {!isDrawerOpen && (
          <StyledIconButton onClick={handleDrawerOpen}>
            <MenuIcon></MenuIcon>
          </StyledIconButton>
        )}
        {isDrawerOpen && <StyledPlug></StyledPlug>}
      </StyledHeaderLeft>
      <StyledHeaderTitle>
        <h1>First Time Right On Time</h1>
      </StyledHeaderTitle>
      <StyledHeaderIcons>
        <StyledAppsIcon></StyledAppsIcon>
        <StyledNotificationsIcon></StyledNotificationsIcon>
        <Link to="/account">
          <Avatar
            src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
            className="header__icon"
          ></Avatar>
        </Link>
        <Button variant="contained" color="secondary" onClick={handleLogOut}>
          Logout
        </Button>
      </StyledHeaderIcons>
    </StyledHeader>
  );
};

export default Header;
