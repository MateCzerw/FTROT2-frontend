import React from "react";
import "./Action.css";
import { Tooltip } from "@material-ui/core";

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
