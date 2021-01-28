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
    duration: 2,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    duration: 2,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "DFMEA",
    duration: 2,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "Design review",
    duration: 10,
    status: 0.5,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    duration: 2,
    status: 0.5,
  },
];

const week = {
  week: "CW02",
  roster: [
    { day: "Monday", date: "27.01.2021", tasks: initialTasks },
    { day: "Thuesday", date: "27.01.2021", tasks: initialTasks },
    { day: "Wednesday", date: "27.01.2021", tasks: initialTasks },
    { day: "Thursday", date: "27.01.2021", tasks: initialTasks },
    { day: "Friday", date: "27.01.2021", tasks: initialTasks },
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
        <NavigateBeforeIcon></NavigateBeforeIcon>
        <div className="engineer tasks tasks__week">
          {schedule.roster.map((day) => (
            <div className="engineer tasks tasks__day">
              {day.tasks.map((task) => (
                <div className="engineer tasks tasks__task">
                  {console.log(task)}
                  <p>name: {task.name}</p>
                  <p>duration: {task.duration}</p>
                  <p>status: {task.status}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <NavigateNextIcon></NavigateNextIcon>
      </div>
    </div>
  );
};

export default Tasks;
