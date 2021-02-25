import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  ChangeTaskStatusAction,
  getWeekWithTasks,
  setTaskDoneAction,
  setTaskOnHold,
} from "../../../../actions/EngineerActions/tasksActions";
import "./Tasks.css";
import Day from "./Day/Day";
import styled from "styled-components";

const StyledBackdrop = styled(Backdrop)`
  z-index: 999;
  position: absolute;
`;

const Tasks = () => {
  const [loading, setLoading] = useState(false);
  const scheduleFromSelector = useSelector((state) => state.engineer.schedule);
  const schedule = JSON.parse(JSON.stringify(scheduleFromSelector));
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getWeekWithTasks(1, 2021))
      .then(setTimeout(() => {}, 3000))
      .finally(setLoading(false));
  }, []);

  const handleGetNextWeek = () => {
    setLoading(true);
    dispatch(getWeekWithTasks(schedule.weekNumber + 1, schedule.yearNumber))
      .then(setTimeout(() => {}, 3000))
      .finally(setLoading(false));
  };

  const handleGetPreviousWeek = () => {
    setLoading(true);
    dispatch(getWeekWithTasks(schedule.weekNumber - 1, schedule.yearNumber))
      .then(setTimeout(() => {}, 3000))
      .finally(setLoading(false));
  };

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
      <StyledBackdrop open={loading}>
        <CircularProgress color="primary" size={200} />
      </StyledBackdrop>
      <div className="engineer tasks tasks__container">
        <h2 className="engineer tasks tasks__weekTitle">
          <b>Week</b> - {schedule.weekNumber}
          <b> Year</b> - {schedule.yearNumber}
        </h2>
        <div className="engineer tasks tasks__week">
          <div className="engineer tasks tasks__arrow">
            <NavigateBeforeIcon
              onClick={handleGetPreviousWeek}
            ></NavigateBeforeIcon>
          </div>
          {schedule.days?.map((day) => (
            <Day
              dayId={day.id}
              dayName={day.dayName}
              date={day.date}
              tasks={day.tasks}
              actions={actions}
              key={day.id}
            ></Day>
          ))}
          <div className="engineer tasks tasks__arrow">
            <NavigateNextIcon onClick={handleGetNextWeek}></NavigateNextIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
