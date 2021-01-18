import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import "./AssignTasks.css";
const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "6 task" },
  { id: uuid(), content: "7 task" },
  { id: uuid(), content: "8 task" },
  { id: uuid(), content: "9 task" },
  { id: uuid(), content: "10 task" },
  { id: uuid(), content: "11 task" },
  { id: uuid(), content: "12 task" },
  { id: uuid(), content: "13 task" },
  { id: uuid(), content: "14 task" },
  { id: uuid(), content: "15 task" },
];

const findEngineerByColumnId = () => {};

const columnsFTROT = [
  {
    engineer: "Mateusz Czerwiński",
    week: 1,
    schedule: [
      { columnId: uuid(), dayName: "Monday", tasks: [] },
      { columnId: uuid(), dayName: "Tuesday", tasks: [] },
      { columnId: uuid(), dayName: "Wednesday", tasks: [] },
      { columnId: uuid(), dayName: "Thursday", tasks: [] },
      { columnId: uuid(), dayName: "Friday", tasks: [] },
    ],
  },
  {
    engineer: "Bartosz Kozłowski",
    week: 1,
    tasksInWeek: [
      { columnId: uuid(), day: "Monday", tasks: [] },
      { columnId: uuid(), day: "Tuesday", tasks: [] },
      { columnId: uuid(), day: "Wednesday", tasks: [] },
      { columnId: uuid(), day: "Thursday", tasks: [] },
      { columnId: uuid(), day: "Friday", tasks: [] },
    ],
  },
  {
    engineer: "Agnieszka Leszczuk",
    week: 1,
    tasksInWeek: [
      { columnId: uuid(), day: "Monday", tasks: [] },
      { columnId: uuid(), day: "Tuesday", tasks: [] },
      { columnId: uuid(), day: "Wednesday", tasks: [] },
      { columnId: uuid(), day: "Thursday", tasks: [] },
      { columnId: uuid(), day: "Friday", tasks: [] },
    ],
  },
  {
    engineer: "Marek Repeła",
    week: 1,
    tasksInWeek: [
      { columnId: uuid(), day: "Monday", tasks: [] },
      { columnId: uuid(), day: "Tuesday", tasks: [] },
      { columnId: uuid(), day: "Wednesday", tasks: [] },
      { columnId: uuid(), day: "Thursday", tasks: [] },
      { columnId: uuid(), day: "Friday", tasks: [] },
    ],
  },
];

const unassignedTasksFromBackend = {
  [uuid()]: {
    name: "Not assigned",
    items: itemsFromBackend,
  },
};

const columnsFromBackend = {
  [uuid()]: {
    name: "Monday",
    items: [],
  },
  [uuid()]: {
    name: "Tuesday",
    items: [],
  },
  [uuid()]: {
    name: "Wednesday",
    items: [],
  },
  [uuid()]: {
    name: "Thursday",
    items: [],
  },
  [uuid()]: {
    name: "Friday",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  console.log(columnsFromBackend);
  // console.log(columns);
  // console.log(setColumns);
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const AssignTasks = () => {
  // const [columns, setColumns] = useState(columnsFromBackend);
  const [columns, setColumns] = useState(columnsFromBackend);
  const [unassignedTasks, setUnassignedTasks] = useState(
    unassignedTasksFromBackend
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="tasks__container">
          <div className="tasks__unassigned">
            {Object.entries(unassignedTasks).map(
              ([columnId, column], index) => {
                return (
                  <div key={columnId}>
                    <h2>{column.name}</h2>
                    <div style={{ margin: 8 }}>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              className="tasks__day"
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                background: snapshot.isDraggingOver
                                  ? "lightblue"
                                  : "lightgrey",
                              }}
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            padding: 16,
                                            margin: "0 0 8px 0",
                                            minHeight: "50px",
                                            backgroundColor: snapshot.isDragging
                                              ? "#263B4A"
                                              : "#456C86",
                                            color: "white",
                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          {item.content}
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
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="tasks__engineerContainer">
            {columnsFTROT[0].schedule.map((day, index) => {
              const { columnId, dayName, tasks } = day;
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={columnId}
                >
                  <h2>{dayName}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 250,
                              minHeight: 500,
                            }}
                          >
                            {tasks.map((task, index) => {
                              return (
                                <Draggable
                                  key={task.id}
                                  draggableId={task.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        {task.content}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default AssignTasks;
