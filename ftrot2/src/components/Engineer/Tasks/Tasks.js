import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import moment from "moment";
import { uuid } from "uuidv4";
import "./Tasks.css";

const initialTasks = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "DFMEA",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "Design review",
    workpackage: "DAF",
    duration: 10,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
  },
];

const week = {
  week: "CW02",
  roster: [
    { dayName: "Monday", date: "27.01.2021", tasks: initialTasks },
    { dayName: "Thuesday", date: "28.01.2021", tasks: initialTasks },
    { dayName: "Wednesday", date: "29.01.2021", tasks: initialTasks },
    { dayName: "Thursday", date: "30.01.2021", tasks: initialTasks },
    { dayName: "Friday", date: "31.01.2021", tasks: initialTasks },
  ],
};
const Tasks = () => {
  const [schedule, setSchedule] = useState(week);

  //   useEffect(() => {
  //     setSchedule(week);
  //   }, []);

  return (
    <div className="engineer tasks tasks__background">
      <div className="engineer tasks tasks__container">
        <h2 className="engineer tasks tasks__weekTitle">
          <b>Week</b> - {schedule.week}
        </h2>
        <div className="engineer tasks tasks__week">
          <div className="engineer tasks tasks__arrow">
            <NavigateBeforeIcon></NavigateBeforeIcon>
          </div>
          {schedule.roster.map((day) => (
            <div className="engineer tasks tasks__day">
              <div className="engineer tasks tasks__dayInfo">
                <h2 className="engineer tasks tasks__dayName">{day.dayName}</h2>
                <h2 className="engineer tasks tasks__dayDate"> {day.date}</h2>
              </div>
              {day.tasks.map((task) => (
                <div className="engineer tasks tasks__task">
                  <p>name: {task.name}</p>
                  <p>duration: {task.duration}</p>
                  <p>status: {task.status * 100}%</p>
                  <p>workpackage: {task.workpackage}</p>
                </div>
              ))}
            </div>
          ))}
          <div className="engineer tasks tasks__arrow">
            <NavigateNextIcon></NavigateNextIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
