import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const calculateTotalHoursInColumn = (tasks) => {
  let counter = 0;
  tasks.forEach((task) => (counter += task.duration));
  return counter;
};

const TasksColumn = ({ columnId, tasks, dayName }) => {
  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="teamLeader assignTasks tasks__dayContainer"
            style={{
              background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
            }}
          >
            <h3>{`${dayName} | ${calculateTotalHoursInColumn(tasks)}h`}</h3>

            {tasks.map((task, index) => {
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="teamLeader assignTasks tasks__eachTask"
                        style={{
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "tomato",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <p>{task.content}</p>
                        <p>{task.duration}</p>
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default TasksColumn;
