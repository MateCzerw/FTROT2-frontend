import React, { useState, useEffect } from "react";
import "./LeadEngineerBoard.css";
import moment from "moment";
import { Doughnut, Line } from "react-chartjs-2";

const userInfo = {
  name: "Mateusz",
  surname: "Czerwiński",
  picture:
    "https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo",
  role: "Lead engineer",
  team: "DLSC2",
  supervisor: "Wojciech Zabiegło",
  joinedAt: moment(Date.now()).calendar(),
  finishedWorkpackages: 25,
  unFinishedWorkpackages: 5,
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

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Finished workpackages",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Unfinished workpackages",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const LeadEngineerBoard = () => {
  const [userDetails, setUserDetails] = useState(userInfo);

  return (
    <div className="leadEngineer board board__background">
      <div className="leadEngineer board board__container">
        <div className="leadEngineer board board__info">
          <div className="leadEngineer board board__details">
            <div className="leadEngineer board board__column">
              <img src={userDetails.picture} alt="User"></img>
            </div>
            <div className="leadEngineer board board__column">
              <p className="leadEngineer board board__stat">
                <b>Name:</b> {userDetails.name}
              </p>
              <p className="leadEngineer board board__stat">
                <b>Surname:</b> {userDetails.surname}
              </p>
            </div>
            <div className="leadEngineer board board__column">
              <p className="leadEngineer board board__stat">
                <b>Joined at:</b> {userDetails.joinedAt}
              </p>
              <p className="leadEngineer board board__stat">
                <b>Role:</b> {userDetails.role}
              </p>
            </div>
            <div className="leadEngineer board board__column">
              <p className="leadEngineer board board__stat">
                <b>Team:</b> {userDetails.team}
              </p>
              <p className="leadEngineer board board__stat">
                <b>Supervisor:</b> {userDetails.supervisor}
              </p>
            </div>
            <div className="leadEngineer board board__column">
              <p className="leadEngineer board board__stat">
                <b>Finished workpackages:</b> {userDetails.finishedWorkpackages}
              </p>
              <p className="leadEngineer board board__stat">
                <b>Unfinished workpackages:</b>{" "}
                {userDetails.unFinishedWorkpackages}
              </p>
            </div>
          </div>
        </div>

        <div className="leadEngineer board board__statistics">
          <ul className="leadEngineer board board__workpackages">
            <h3>Workpackages with upcoming deadline</h3>
            {userDetails.workPackages.map((workPackage) => (
              <li className="leadEngineer board board__workpackage">
                <div
                  className="leadEngineer board board__workpackageStatus"
                  style={{ width: "50%" }}
                ></div>
                <p className="leadEngineer board board__workpackageDescription">
                  {`Name:
              ${workPackage.name} Status: ${
                    workPackage.tasksStatus * 100
                  }% Due to: 
              ${workPackage.dueTo}`}
                </p>
              </li>
            ))}
          </ul>
          <div className="leadEngineer board board__graph">
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
              options={{
                maintainAspectRatio: false,
                position: "right",
              }}
            ></Doughnut>
          </div>
        </div>
        <article className="engineer board board__ftrotPanel">
          <Line
            data={data}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
          />
        </article>
      </div>
    </div>
  );
};

export default LeadEngineerBoard;
