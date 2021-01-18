import { Divider, Drawer, IconButton, List } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, handleSidebarClose, actions }) => {
  return (
    <Drawer anchor="left" open={isSidebarOpen} variant="persistent">
      <div>
        <IconButton onClick={handleSidebarClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
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
              <ListItemIcon>
                <action.icon />
              </ListItemIcon>
              <ListItemText primary={action.name} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
