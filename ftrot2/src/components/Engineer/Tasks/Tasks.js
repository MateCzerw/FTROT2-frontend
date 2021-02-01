import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TaskActions from "./TaskActions";

import moment from "moment";
import { uuid } from "uuidv4";
import "./Tasks.css";
import Day from "./Day/Day";

const initialTasksMonday = [
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
const initialTasksTuesday = [
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
const initialTasksWednesday = [
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
const initialTasksThursday = [
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
const initialTasksFriday = [
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
    {
      id: uuid(),
      dayName: "Monday",
      date: "27.01.2021",
      tasks: initialTasksMonday,
    },
    {
      id: uuid(),
      dayName: "Thuesday",
      date: "28.01.2021",
      tasks: initialTasksTuesday,
    },
    {
      id: uuid(),
      dayName: "Wednesday",
      date: "29.01.2021",
      tasks: initialTasksWednesday,
    },
    {
      id: uuid(),
      dayName: "Thursday",
      date: "30.01.2021",
      tasks: initialTasksThursday,
    },
    {
      id: uuid(),
      dayName: "Friday",
      date: "31.01.2021",
      tasks: initialTasksFriday,
    },
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
            task.status = 1;
            return task;
          }
          return task;
        });
      }
      return day;
    });
    setSchedule({ ...schedule, roster: copiedRoster });
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
            if (status === 1) task.isDone = true;
            return task;
          }
          return task;
        });
      }
      return day;
    });
    setSchedule({ ...schedule, roster: copiedRoster });
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
