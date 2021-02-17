import { Divider, Drawer, IconButton, List } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`
  margin: 5px 0 5px 20px;
  padding: 10px;
  width: 40px;
  height: 40px;
  color: #efefef;

  &:hover {
    background-color: rgb(239, 239, 239, 0.1);
  }
`;
const StyledDrawer = styled(Drawer)`
  /* width: 700px; */
`;
const StyledListItemIcon = styled(ListItem)`
  margin: 0 20px 0 5px;
  width: 10px;
  color: #efefef;
`;

const Sidebar = ({ isSidebarOpen, handleSidebarClose, actions }) => {
  return (
    <StyledDrawer anchor="left" open={isSidebarOpen} variant="persistent">
      <StyledIconButton onClick={handleSidebarClose}>
        <ChevronLeftIcon />
      </StyledIconButton>
      <Divider />
      <List>
        {actions.map((action, index) => {
          return (
            <ListItem
              component={Link}
              to={action.link}
              button
              key={action.name}
            >
              <StyledListItemIcon>
                <action.icon />
              </StyledListItemIcon>
              <ListItemText primary={action.name} />
            </ListItem>
          );
        })}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
