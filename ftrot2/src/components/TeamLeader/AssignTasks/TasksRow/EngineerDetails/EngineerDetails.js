import React from "react";
import { Doughnut } from "react-chartjs-2";
const calculateTotalHoursInRow = (schedule) => {
  let counter = 0;
  schedule.forEach((day) => {
    day.tasks.forEach((task) => (counter += task.duration));
  });
  return counter;
};

const EngineerDetails = ({ name, surname, schedule }) => {
  return (
    <div className="teamLeader assignTasks tasks__engineerInfo">
      <div className="teamLeader assignTasks tasks__engineerDetails">
        <div className="teamLeader assignTasks tasks__engineerName">
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
        </div>
        <img
          src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="User"
        ></img>
      </div>
      <div className="teamLeader assignTasks tasks__chart">
        <Doughnut
          data={{
            labels: ["Assigned", "Unassiged", "Overtime"],
            datasets: [
              {
                data: [
                  calculateTotalHoursInRow(schedule) > 40
                    ? 40
                    : calculateTotalHoursInRow(schedule),
                  40 - calculateTotalHoursInRow(schedule) > 0
                    ? 40 - calculateTotalHoursInRow(schedule)
                    : 0,
                  calculateTotalHoursInRow(schedule) - 40 > 0
                    ? calculateTotalHoursInRow(schedule) - 40
                    : 0,
                ],
                backgroundColor: ["green", "gray", "red"],
              },
            ],
          }}
          width={"100%"}
          height={"100%"}
          options={{
            maintainAspectRatio: false,
            legend: false,
            centerText: {
              display: true,
              text: `90%`,
            },
          }}
        ></Doughnut>
        <p className="teamLeader assignTasks tasks__chartText">{`${calculateTotalHoursInRow(
          schedule
        )} / 40`}</p>
      </div>
    </div>
  );
};

export default EngineerDetails;
