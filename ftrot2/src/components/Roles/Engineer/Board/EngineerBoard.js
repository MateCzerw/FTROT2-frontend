import React from "react";
import Board from "../../../Layout/Board/Board";
import UserDetails from "./UserDetails/UserDetails";
import Left from "./UsefulInformations/UsefulInformationsLeft/UsefulInformationsLeft";
import Right from "./UsefulInformations/UsefulInformationsRight/UsefulInformationRight";
const EngineerBoard = () => {
  return <Board Details={UserDetails} Left={Left} Right={Right}></Board>;
};

export default EngineerBoard;
