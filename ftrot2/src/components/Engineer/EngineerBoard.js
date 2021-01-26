import React, { useState } from "react";
import "./EngineerBoard.css";
import Slider from "@material-ui/core/Slider";
import { Doughnut, Pie } from "react-chartjs-2";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import moment from "moment";

const contentInfo = {
  name: "Mateusz",
  surname: "Czerwiński",
  team: "DLSC2",
  role: "Lead Eangineer",
  supervisor: "Wojciech Zabiegło",
  joinedAt: moment(Date.now()).calendar(),
  picture: "",
  currentTasks: [
    { name: "Wypełnić Ftrot", status: 0.9, estimatedTime: 4 },
    { name: "Zrobić rysunek", status: 1, estimatedTime: 4 },
    { name: "Zrobić model obudowy", status: 0.9, estimatedTime: 4 },
    { name: "Zrobić model Pedału", status: 1, estimatedTime: 4 },
    { name: "Zrobić wniosek Patentowy", status: 0.9, estimatedTime: 4 },
    { name: "Zrobić efficieny", status: 1, estimatedTime: 4 },
  ],
};

const EngineerBoard = () => {
  return (
    <main className="engineer board__background">
      <section className="engineer board__container">
        <article className="engineer board__userDetails">
          <img
            src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="Mateusz Czerwiński"
          ></img>
          <div className="engineer board__statsColumn">
            <p className="engineer board__stat">
              <b>Name:</b> {contentInfo.name}
            </p>
            <p className="engineer board__stat">
              <b>Surname:</b> {contentInfo.surname}
            </p>
          </div>
          <div className="engineer board__statsColumn">
            <p className="engineer board__stat">
              <b>Team:</b> {contentInfo.team}
            </p>
            <p className="engineer board__stat">
              <b>Role:</b> {contentInfo.role}
            </p>
          </div>
          <div className="engineer board__statsColumn">
            <p className="engineer board__stat">
              <b>Supervisor:</b> {contentInfo.supervisor}
            </p>
            <p className="engineer board__stat">
              <b>Joined at:</b> {contentInfo.joinedAt}
            </p>
          </div>
        </article>
        <article className="engineer board__panel">
          <ul className="engineer board__tasks">
            {contentInfo.currentTasks.map((task) => (
              <li className="engineer board__task">
                <div
                  className="engineer board__taskStatus"
                  style={{ width: "50%" }}
                ></div>
                <p className="engineer board__taskDescription">
                  {`Name:
              ${task.name} Status: ${task.status * 100}% Estimated time: 
              ${task.estimatedTime}`}
                </p>
              </li>
            ))}
          </ul>
          <div className="engineer board__graph">
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
        </article>
      </section>
    </main>
  );
};

export default EngineerBoard;
