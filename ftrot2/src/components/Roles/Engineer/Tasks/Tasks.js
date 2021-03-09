import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useSelector, useDispatch } from "react-redux";
import {
  ChangeTaskStatusAction,
  getWeekWithTasks,
  setTaskDoneAction,
  setTaskOnHold,
} from "../../../../actions/EngineerActions/tasksActions";
import Day from "./Day/Day";
import styled from "styled-components";

const StyledBackground = styled.div`
  display: flex;
  min-height: inherit;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #efefef;
`;

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledWeekNumber = styled.h2`
  margin-bottom: 35px;
  background-color: #1d1d1f;
  width: 100%;
  text-align: center;
  padding: 20px;

  & > b {
    color: #b0b0b0;
    font-weight: bolder;
  }
`;

const StyledWeekContainer = styled.div`
  display: flex;
`;

const StyledNavigateArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > .MuiSvgIcon-root {
    height: 100px;
    width: auto;
    transition: transform 0.2s ease-in;
  }

  & > .MuiSvgIcon-root:hover {
    height: 100px;
    width: auto;
    color: #b0b0b0;
    transform: scale(1.07);
    cursor: pointer;
  }
`;

const Tasks = () => {
  const [loading, setLoading] = useState(false);
  const schedule = useSelector((state) => state.engineer.schedule);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeekWithTasks(1, 2021));
  }, []);

  const handleGetNextWeek = () => {
    dispatch(getWeekWithTasks(schedule.weekNumber + 1, schedule.yearNumber));
  };

  const handleGetPreviousWeek = () => {
    dispatch(getWeekWithTasks(schedule.weekNumber - 1, schedule.yearNumber));
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
    <StyledBackground>
      <StyledContainer>
        <StyledWeekNumber>
          <b>Week</b> - {schedule.weekNumber}
          <b> Year</b> - {schedule.yearNumber}
        </StyledWeekNumber>
        <StyledWeekContainer>
          <StyledNavigateArrow>
            <NavigateBeforeIcon
              onClick={handleGetPreviousWeek}
            ></NavigateBeforeIcon>
          </StyledNavigateArrow>
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
          <StyledNavigateArrow>
            <NavigateNextIcon onClick={handleGetNextWeek}></NavigateNextIcon>
          </StyledNavigateArrow>
        </StyledWeekContainer>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Tasks;
