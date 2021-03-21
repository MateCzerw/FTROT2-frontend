import React from "react";
import styled from "styled-components";
import { Tooltip } from "@material-ui/core";

const StyledTaskAction = styled.div`
  color: #93c5fd;
  & > .MuiSvgIcon-root {
    height: 20px;
    color: #93c5fd;
    transition: transform 0.2s ease-in;
  }

  &:hover > .MuiSvgIcon-root {
    color: #3d94f8;
    transform: scale(1.57);
    cursor: pointer;
  }
`;
const Action = ({ Icon, tooltip, action }) => {
  return (
    <div className="engineer tasks action">
      <Tooltip title={tooltip} onClick={() => action()}>
        <Icon></Icon>
      </Tooltip>
    </div>
  );
};

export default Action;
