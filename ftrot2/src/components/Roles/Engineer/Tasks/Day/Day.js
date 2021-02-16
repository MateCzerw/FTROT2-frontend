import React from "react";
import "./Day.css";
import Task from "./Task/Task";

const Day = ({ dayName, date, tasks, actions, dayId }) => {
  return (
    <div className="engineer tasks tasks__day">
      <div className="engineer tasks tasks__dayInfo">
        <h2 className="engineer tasks tasks__dayName">{dayName}</h2>
        <h2 className="engineer tasks tasks__dayDate"> {date}</h2>
      </div>
      {tasks.map((task) => (
        <Task
          dayId={dayId}
          taskId={task.id}
          name={task.name}
          duration={task.duration}
          status={task.status}
          isDone={task.isDone}
          isOnHold={task.isOnHold}
          workpackage={task.workpackage}
          actions={actions}
        ></Task>
      ))}
    </div>
  );
};

export default Day;
