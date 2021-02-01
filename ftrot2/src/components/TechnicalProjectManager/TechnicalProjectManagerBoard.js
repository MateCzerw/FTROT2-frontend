import React, { useState, useEffect } from "react";
import "./TechnicalProjectManagerBoard.css";
import moment from "moment";
import { Doughnut } from "react-chartjs-2";

const userInfo = {
  name: "Maciej",
  surname: "Pszczoła",
  picture:
    "https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo",
  role: "Technical Project Manager",
  team: "DLSC2",
  supervisor: "Łukasz Biernatowski",
  joinedAt: moment(Date.now()).calendar(),
  workPackages: [
    { name: "HMC", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
    { name: "BMC", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
    {
      name: "Volvo",
      tasksStatus: 0.5,
      dueTo: moment(Date.now()).calendar(),
    },
    { name: "Daf", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
    {
      name: "Iveco",
      tasksStatus: 0.5,
      dueTo: moment(Date.now()).calendar(),
    },
  ],
};
const TechnicalProjectManagerBoard = () => {
  const [userDetails, setUserDetails] = useState(userInfo);

  return (
    <div className="tpjm board board__background">
      <div className="tpjm board board__container">
        <div className="tpjm board board__info">
          <h3>User Details</h3>
          <div className="tpjm board board__details">
            <div className="tpjm board board__column">
              <img src={userDetails.picture} alt="User"></img>
            </div>
            <div className="tpjm board board__column">
              <p>
                <b>Name:</b> {userDetails.name}
              </p>
              <p>
                <b>Surname:</b> {userDetails.surname}
              </p>
            </div>
            <div className="tpjm board board__column">
              <p>
                <b>Joined at:</b> {userDetails.joinedAt}
              </p>
              <p>
                <b>Role:</b> {userDetails.role}
              </p>
            </div>
            <div className="tpjm board board__column">
              <p>
                <b>Team:</b> {userDetails.team}
              </p>
              <p>
                <b>Supervisor:</b> {userDetails.supervisor}
              </p>
            </div>
          </div>
        </div>

        <div className="tpjm board board__statistics">
          <ul className="tpjm board board__workPackages">
            {userDetails.workPackages.map((workPackage) => (
              <li className="tpjm board board__workPackage">
                <div
                  className="tpjm board board__status"
                  style={{ width: "50%" }}
                ></div>
                <p className="tpjm board board__description">
                  {`Name:
              ${workPackage.name} Status: ${
                    workPackage.tasksStatus * 100
                  }% Due to: 
              ${workPackage.dueTo}`}
                </p>
              </li>
            ))}
          </ul>
          <div className="tpjm board board__graph">
            <Doughnut
              data={{
                labels: ["Done", "In progress", "Deleyed"],
                datasets: [
                  {
                    data: [90, 32, 30],
                    backgroundColor: ["green", "orange", "gray"],
                  },
                ],
              }}
              width={"100%"}
              height={"100%"}
              options={{ maintainAspectRatio: false, fontColor: "black" }}
            ></Doughnut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProjectManagerBoard;
