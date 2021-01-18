import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import BallotIcon from "@material-ui/icons/Ballot";
import React, { useState } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./Header.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const options = [
  { role: "Engineer", link: "/" },
  {
    role: "Technical Project Manager",
    link: "/technical-project-manager/board",
  },
  { role: "Lead Engineer", link: "/lead-engineer/board" },
  { role: "Team Leader", link: "/team-leader/board" },
];

const Header = ({ handleDrawerOpen, isDrawerOpen, handleLogOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleRoleClick = (index) => {
    setSelectedIndex(index);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div className={`header__left + ${isDrawerOpen ? " active" : ""}`}>
        {!isDrawerOpen && (
          <IconButton className="header__menu" onClick={handleDrawerOpen}>
            <MenuIcon></MenuIcon>
          </IconButton>
        )}

        <div className="header__logo">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<BallotIcon />}
            component={Link}
            to={"/"}
          >
            FTROT2
          </Button>
        </div>
        <div className="header__functionButton">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            variant="contained"
            color="default"
            onClick={handleClick}
          >
            {options[selectedIndex].role}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                component={Link}
                to={option.link}
                key={index}
                selected={index === selectedIndex}
                onClick={() => handleRoleClick(index)}
              >
                {option.role}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <div className="header__title">
        <h1>First Time Right On Time</h1>
      </div>
      <div className="header__icons">
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Link to="/account">
          <Avatar
            src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
            className="header__icon"
          ></Avatar>
        </Link>
        <Button variant="contained" color="secondary" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
