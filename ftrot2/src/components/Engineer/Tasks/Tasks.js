import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useSelector, useDispatch } from "react-redux";
import {
  ChangeTaskStatusAction,
  setTaskDoneAction,
  setTaskOnHold,
} from "../../../actions/EngineerActions/tasksActions";
import moment from "moment";
import { uuid } from "uuidv4";
import "./Tasks.css";
import Day from "./Day/Day";

const Tasks = () => {
  // const [schedule, setSchedule] = useState(week);
  const scheduleFromSelector = useSelector((state) => state.engineer.schedule);
  const schedule = JSON.parse(JSON.stringify(scheduleFromSelector));
  const dispatch = useDispatch();

  const setDoneStatus = (dayId, taskId) => {
    dispatch(setTaskDoneAction(dayId, taskId));
  };

  const setOnHoldStatus = (dayId, taskId) => {
    dispatch(setTaskOnHold(dayId, taskId));
  };

  const setNewStatus = (dayId, taskId, status) => {
    dispatch(ChangeTaskStatusAction(dayId, taskId, status));
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
