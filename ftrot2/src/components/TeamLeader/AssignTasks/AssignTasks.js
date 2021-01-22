import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import { Doughnut } from "react-chartjs-2";
import "./AssignTasks.css";
const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Sixth task" },
  { id: uuid(), content: "Seventh task" },
  { id: uuid(), content: "Eighth task" },
  { id: uuid(), content: "Ninth task" },
  { id: uuid(), content: "Tenth task" },
  { id: uuid(), content: "Eleventh task" },
  { id: uuid(), content: "Twelfth task" },
  { id: uuid(), content: "Thirteenth task" },
];

const items1 = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Sixth task" },
  { id: uuid(), content: "Seventh task" },
];

const items2 = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
];

const items3 = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
];

const items4 = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
];

const items5 = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
];

const columnsFTROT = [
  {
    name: "Mateusz",
    surname: "Czerwiński",
    week: 1,
    schedule: [
      { columnId: uuid(), dayName: "Monday", tasks: items1 },
      { columnId: uuid(), dayName: "Tuesday", tasks: items2 },
      { columnId: uuid(), dayName: "Wednesday", tasks: items3 },
      { columnId: uuid(), dayName: "Thursday", tasks: items4 },
      { columnId: uuid(), dayName: "Friday", tasks: items5 },
    ],
  },
  {
    name: "Bartosz",
    surname: "Kozłowski",
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
    name: "Agnieszka",
    surname: "Leszczuk",
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
    name: "Marek",
    surname: "Repeła",
    week: 1,
    schedule: [
      { columnId: uuid(), dayName: "Monday", tasks: [] },
      { columnId: uuid(), dayName: "Tuesday", tasks: [] },
      { columnId: uuid(), dayName: "Wednesday", tasks: [] },
      { columnId: uuid(), dayName: "Thursday", tasks: [] },
      { columnId: uuid(), dayName: "Friday", tasks: [] },
    ],
  },
];

const unassignedTasksFromBackend = {
  [uuid()]: {
    name: "Not assigned",
    items: itemsFromBackend,
  },
};

const generateColumnForOneDay = (columnId, tasks, dayName) => {
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
            <h3>{dayName}</h3>

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
  if (!result.destination) return;
  console.log("Result: ", result);
  console.log("Columns: ", columns);
  console.log("setColumns: ", setColumns);
  const { source, destination } = result;

  const sourceRow = columns.find((engineer) =>
    engineer.schedule.some((item) => item.columnId === source.droppableId)
  );

  const destinationRow = columns.find((engineer) =>
    engineer.schedule.some((item) => item.columnId === destination.droppableId)
  );

  const sourceColumn = sourceRow.schedule.find(
    (item) => item.columnId === source.droppableId
  );

  const destColumn = destinationRow.schedule.find(
    (item) => item.columnId === destination.droppableId
  );
  if (sourceRow !== destinationRow) {
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = [...destColumn.tasks];
    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);
    sourceColumn.tasks = sourceTasks;
    destColumn.tasks = destTasks;

    setColumns([...columns, sourceRow, destinationRow]);
  }

  //MODIFICATION WITHIN 1 ENGINEER TASKS (SAME ENGINEER DIFFERENT DAY)
  if (sourceRow === destinationRow && sourceColumn !== destColumn) {
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = [...destColumn.tasks];
    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);
    sourceColumn.tasks = sourceTasks;
    destColumn.tasks = destTasks;
    setColumns([...columns, sourceRow]);
  }

  //MODIFICATION WITHIN 1 DAY (SAME ENGINEER SAME DAY)
  if (sourceRow === destinationRow && sourceColumn === destColumn) {
    const tasks = [...sourceColumn.tasks];
    const copiedItems = [...tasks];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    sourceColumn.tasks = copiedItems;
    setColumns([...columns, sourceRow]);
  }

  // const sourceColumn = sourceEngineer.schedule.find(
  //   (item) => item.columnId === source.droppableId
  // );
  //   const sourceColumn = columns[source.droppableId];
  // const destColumn = sourceEngineer.schedule.find(
  //   (item) => item.columnId === destination.droppableId
  // );
  //   const column = columns[source.droppableId];
  //   const copiedItems = [...column.items];
  //   const [removed] = copiedItems.splice(source.index, 1);
  //   copiedItems.splice(destination.index, 0, removed);
  // setColumns([...columns, sourceEngineer]);
  //   setColumns({
  //     ...columns,
  //     [source.droppableId]: {
  //       ...column,
  //       items: copiedItems,
  //     },
  //   });

  //UNASSIGNED TASKS SERVICE

  if (false) {
    // const sourceColumn = sourceEngineer.schedule.find(
    //   (item) => item.columnId === source.droppableId
    // );
    //   const sourceColumn = columns[source.droppableId];
    // const destColumn = sourceEngineer.schedule.find(
    //   (item) => item.columnId === destination.droppableId
    // );
    //   const column = columns[source.droppableId];
    //   const copiedItems = [...column.items];
    //   const [removed] = copiedItems.splice(source.index, 1);
    //   copiedItems.splice(destination.index, 0, removed);
    // setColumns([...columns, sourceEngineer]);
    //   setColumns({
    //     ...columns,
    //     [source.droppableId]: {
    //       ...column,
    //       items: copiedItems,
    //     },
    //   });
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
                        className="tasks__unasignedTasksColumn"
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
                                        : "tomato",
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
            return (
              <div className="tasks__engineer">
                {column.schedule.map((day) => {
                  const { columnId, dayName, tasks } = day;
                  return generateColumnForOneDay(columnId, tasks, dayName);
                })}
                <div className="tasks__engineerInfo">
                  <div className="tasks__engineerDetails">
                    <div className="tasks__engineerName">
                      <p>Name: {column.name}</p>
                      <p>Surname: {column.surname}</p>
                    </div>
                    <img
                      src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
                      alt="User"
                    ></img>
                  </div>
                  <div className="tasks__chart">
                    <Doughnut
                      data={{
                        labels: ["Assigned", "Unassiged", "Overtime"],
                        datasets: [
                          {
                            data: [90, 32, 30],
                            backgroundColor: ["green", "orange", "gray"],
                          },
                        ],
                      }}
                      width={"100%"}
                      height={"100%"}
                      options={{
                        maintainAspectRatio: false,
                        legend: false,
                      }}
                    ></Doughnut>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
};

export default AssignTasks;
