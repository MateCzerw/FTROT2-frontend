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
];

const anotherItems = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
];

const findEngineerByColumnId = () => {};

const columnsFTROT = [
  {
    engineer: "Mateusz Czerwiński",
    week: 1,
    schedule: [
      { columnId: uuid(), dayName: "Monday", tasks: anotherItems },
      { columnId: uuid(), dayName: "Tuesday", tasks: [] },
      { columnId: uuid(), dayName: "Wednesday", tasks: [] },
      { columnId: uuid(), dayName: "Thursday", tasks: [] },
      { columnId: uuid(), dayName: "Friday", tasks: [] },
    ],
  },
  {
    engineer: "Bartosz Kozłowski",
    week: 1,
    schedule: [
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
    schedule: [
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
    schedule: [
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

const generateRawForOneWeek = () => {
  return <div></div>;
};

const generateColumnForOneDay = (columnId, tasks) => {
  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="tasks__dayContainer"
            style={{
              background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
            }}
          >
            {tasks.map((task, index) => {
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="tasks__eachTask"
                        style={{
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "tomato",
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
  );
};

const onDragEnd = (result, columns, setColumns) => {
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
  const [columns, setColumns] = useState(columnsFTROT);
  const [unassignedTasks, setUnassignedTasks] = useState(
    unassignedTasksFromBackend
  );

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <div className="tasks__container">
        <div className="tasks__unassignedTasksBoard">
          {Object.entries(unassignedTasks).map(([columnId, column], index) => {
            return (
              <div key={columnId}>
                <h2>Unassigned tasks</h2>

                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        className="tasks__eachDay"
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
                                    className="tasks__eachTask"
                                    style={{
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
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
            );
          })}
        </div>

        <div className="tasks__engineersBoard">
          {columnsFTROT.map((column, index) => {
            return column.schedule.map((day) => {
              const { columnId, dayName, tasks } = day;
              return generateColumnForOneDay(columnId, tasks);
            });
          })}
        </div>
      </div>
    </DragDropContext>
  );
};

export default AssignTasks;
