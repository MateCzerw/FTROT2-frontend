import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TaskActions from "./TaskActions";

import moment from "moment";
import { uuid } from "uuidv4";
import "./Tasks.css";
import Day from "./Day/Day";

const initialTasks = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "DFMEA",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Design review",
    workpackage: "DAF",
    duration: 10,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
];

const week = {
  id: uuid(),
  week: "CW02",
  roster: [
    { id: uuid(), dayName: "Monday", date: "27.01.2021", tasks: initialTasks },
    {
      id: uuid(),
      dayName: "Thuesday",
      date: "28.01.2021",
      tasks: initialTasks,
    },
    {
      id: uuid(),
      dayName: "Wednesday",
      date: "29.01.2021",
      tasks: initialTasks,
    },
    {
      id: uuid(),
      dayName: "Thursday",
      date: "30.01.2021",
      tasks: initialTasks,
    },
    { id: uuid(), dayName: "Friday", date: "31.01.2021", tasks: initialTasks },
  ],
};
const Tasks = () => {
  const [schedule, setSchedule] = useState(week);

  const setDoneStatus = (dayId, taskId) => {
    let copiedRoster = schedule.roster.map((day) => {
      if (day.id === dayId) {
        day.tasks.map((task) => {
          if (task.id === taskId) {
            task.isDone = !task.isDone;
            return task;
          }
          return task;
        });
      }
      return day;
    });
    setSchedule({ ...schedule, roster: copiedRoster });
    console.log(schedule);
  };

  const setOnHoldStatus = (dayId, taskId) => {
    let copiedRoster = schedule.roster.map((day) => {
      if (day.id === dayId) {
        day.tasks.map((task) => {
          if (task.id === taskId) {
            task.isOnHold = !task.isOnHold;
            return task;
          }
          return task;
        });
      }
      return day;
    });
    setSchedule({ ...schedule, roster: copiedRoster });
    console.log(schedule);
  };

  const setNewStatus = (dayId, taskId, status) => {
    let copiedRoster = schedule.roster.map((day) => {
      if (day.id === dayId) {
        day.tasks.map((task) => {
          if (task.id === taskId) {
            task.status = status;
            return task;
          }
          return task;
        });
      }
      return day;
    });
    setSchedule({ ...schedule, roster: copiedRoster });
    console.log(schedule);
  };

  const actions = {
    handleSetDoneStatus: (dayId, taskId) => setDoneStatus(dayId, taskId),
    handleOnHoldStatus: (dayId, taskId) => setOnHoldStatus(dayId, taskId),
    handleChangeStatus: (dayId, taskId, status) =>
      setNewStatus(dayId, taskId, status),
  };

  // actions.setDoneStatus();

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
            <Day
              dayId={day.id}
              dayName={day.dayName}
              date={day.date}
              tasks={day.tasks}
              actions={actions}
            ></Day>
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
