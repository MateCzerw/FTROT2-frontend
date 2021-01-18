import React from "react";
import "./EngineerBoard.css";
import Slider from "@material-ui/core/Slider";
import { Pie } from "react-chartjs-2";

const contentInfo = {
  name: "Mateusz",
  surname: "Czerwiński",
  team: "DLSC2",
  role: "Lead Eangineer",
  supervisor: "Wojciech Zabiegło",
  joinedAt: Date.now(),
  picture: "",
  currentTasks: [
    { taskName: "Wypełnić Ftrot", status: 0.9, estimatedTime: 4 },
    { taskName: "Zrobić rysunek", status: 1, estimatedTime: 4 },
    { taskName: "Zrobić model obudowy", status: 0.9, estimatedTime: 4 },
    { taskName: "Zrobić model Pedału", status: 1, estimatedTime: 4 },
    { taskName: "Zrobić wniosek Patentowy", status: 0.9, estimatedTime: 4 },
    { taskName: "Zrobić efficieny", status: 1, estimatedTime: 4 },
  ],
};

const EngineerBoard = () => {
  return (
    <main className="content">
      <section className="content__panel">
        <h2 className="content__title">User Info</h2>
        <article className="content__userDetails">
          <img
            src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="Mateusz Czerwiński"
          ></img>
          <div>
            <h3>Name: {contentInfo.name}</h3>
            <h3>Surname: {contentInfo.surname}</h3>
          </div>
          <div>
            <h3>Team: {contentInfo.team}</h3>
            <h3>Role: {contentInfo.role}</h3>
          </div>
        </article>
        <article className="content__tasks">
          <ol className="content__tasklist">
            {/* {console.log( */}
            {contentInfo.currentTasks.map((task, i) => (
              <li key={i}>
                <p>{task.taskName}</p>
                <Slider
                  defaultValue={task.status * 100}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </li>
            ))}
          </ol>
          <div className="content__statistics">
            <Pie
              data={{
                labels: contentInfo.currentTasks.map((task) => task.taskName),
                datasets: [
                  {
                    data: contentInfo.currentTasks.map(
                      (task) => task.status * task.estimatedTime
                    ),
                    backgroundColor: ["green", "orange", "gray"],
                  },
                ],
              }}
              width={"50%"}
              height={"50%"}
              options={{ maintainAspectRatio: false }}
            ></Pie>
          </div>
        </article>
      </section>
    </main>
  );
};

export default EngineerBoard;
