import React from "react";
import styled from "styled-components";
import Task from "./Task/Task";

const StyledDayContainer = styled.div`
  padding: 0 10px 10px 10px;
  margin: 0 1.25vw;
  min-width: 14vw;
  height: 60vh;
  background-color: #262729;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDayInfo = styled.div`
  background-color: #262729;
  color: #c9c9c9;
  position: sticky;
  z-index: 999;
  top: 0;
`;
const StyledDayName = styled.h2`
  text-align: center;
  padding: 10px;
`;
const StyledDayDate = styled.h2`
  text-align: center;
  padding: 10px;
`;

const Day = ({ dayName, date, tasks, actions, dayId }) => {
  return (
    <StyledDayContainer>
      <StyledDayInfo>
        <StyledDayName>{dayName}</StyledDayName>
        <StyledDayDate> {date}</StyledDayDate>
      </StyledDayInfo>
      {tasks.map((task) => (
        <Task
          dayId={dayId}
          taskId={task.id}
          name={task.name}
          duration={task.duration}
          description={task.description}
          status={task.status}
          isDone={task.isDone}
          isOnHold={task.isOnHold}
          workpackage={task.workPackageName}
          actions={actions}
        ></Task>
      ))}
    </StyledDayContainer>
  );
};

export default Day;
