import { Card, Grid } from "@material-ui/core";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task/Task";

const StyledColumn = styled(Card)`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
  height: ${(props) => (props.isUnassignedTasks ? "100vh" : "40vh")};

  & > h3 {
    text-align: center;
    padding: 10px;
    border-bottom: solid 1px white;
  }
`;

const StyledDroppableContainer = styled.div`
  background-color: ${(props) => (props.isDraggingOver ? "silver" : "#424242")};
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const calculateTotalHoursInColumn = (tasks) => {
  let counter = 0;
  tasks?.forEach((task) => (counter += task?.duration));
  return counter;
};

const TasksColumn = ({ columnId, dayName, tasks, isUnassignedTasks }) => {
  return (
    <Droppable droppableId={"day_" + columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <StyledColumn isUnassignedTasks={isUnassignedTasks}>
            <h3>{`${dayName} | ${calculateTotalHoursInColumn(tasks)}h`}</h3>
            <StyledDroppableContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks?.map((task, index) => {
                return (
                  <Draggable
                    key={task.id}
                    draggableId={"task_" + task.id}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <Task
                          id={task.id}
                          provided={provided}
                          snapshot={snapshot}
                          name={task.name}
                          duration={task.duration}
                        ></Task>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </StyledDroppableContainer>
          </StyledColumn>
        );
      }}
    </Droppable>
  );
};

export default TasksColumn;
