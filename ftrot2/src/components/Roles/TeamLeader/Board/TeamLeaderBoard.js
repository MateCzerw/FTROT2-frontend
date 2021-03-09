import React from "react";
import Board from "../../../Layout/Board/Board";
import Left from "./UsefulInformations/UsefulInformationsLeft/UsefulInformationsLeft";
import Right from "./UsefulInformations/UsefulInformationsRight/UsefulInformationRight";
import UserDetails from "./UserDetails/UserDetails";

const TeamLeaderBoard = () => {
  return <Board Details={UserDetails} Left={Left} Right={Right}></Board>;
};

export default TeamLeaderBoard;
