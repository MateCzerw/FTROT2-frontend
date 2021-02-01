import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import { Doughnut } from "react-chartjs-2";
import "./AssignTasks.css";
import TasksColumn from "./TasksRow/TasksColumn/TasksColumn";
import EngineerDetails from "./TasksRow/EngineerDetails/EngineerDetails";
import TasksRow from "./TasksRow/TasksRow";
const itemsFromBackend = [
  { id: uuid(), content: "First task", duration: 8 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
  { id: uuid(), content: "Fourth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Sixth task", duration: 2 },
  { id: uuid(), content: "Seventh task", duration: 2 },
  { id: uuid(), content: "Eighth task", duration: 2 },
  { id: uuid(), content: "Ninth task", duration: 2 },
  { id: uuid(), content: "Tenth task", duration: 2 },
  { id: uuid(), content: "Eleventh task", duration: 2 },
  { id: uuid(), content: "Twelfth task", duration: 2 },
  { id: uuid(), content: "Thirteenth task", duration: 2 },
];

const items1 = [
  { id: uuid(), content: "First task", duration: 8 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
  { id: uuid(), content: "Fourth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },

  { id: uuid(), content: "Seventh task", duration: 2 },
];

const items2 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 6 },
  { id: uuid(), content: "Third task", duration: 2 },
];

const items3 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
];

const items4 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
];

const items5 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
  { id: uuid(), content: "Fourth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
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
  columnId: uuid(),
  name: "Unassigned",
  tasks: itemsFromBackend,
};

// const generateColumnForOneDay = (columnId, tasks, dayName) => {
//   return (
//     <Droppable droppableId={columnId} key={columnId}>
//       {(provided, snapshot) => {
//         return (
//           <div
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//             className="teamLeader assignTasks tasks__dayContainer"
//             style={{
//               background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
//             }}
//           >
//             <h3>{`${dayName} | ${calculateTotalHoursInColumn(tasks)}h`}</h3>

//             {tasks.map((task, index) => {
//               return (
//                 <Draggable key={task.id} draggableId={task.id} index={index}>
//                   {(provided, snapshot) => {
//                     return (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="teamLeader assignTasks tasks__eachTask"
//                         style={{
//                           backgroundColor: snapshot.isDragging
//                             ? "#263B4A"
//                             : "tomato",
//                           ...provided.draggableProps.style,
//                         }}
//                       >
//                         <p>{task.content}</p>
//                         <p>{task.duration}</p>
//                       </div>
//                     );
//                   }}
//                 </Draggable>
//               );
//             })}
//             {provided.placeholder}
//           </div>
//         );
//       }}
//     </Droppable>
//   );
// };

const calculateTotalHoursInColumn = (tasks) => {
  let counter = 0;
  tasks.forEach((task) => (counter += task.duration));
  return counter;
};

const calculateTotalHoursInRow = (schedule) => {
  let counter = 0;
  schedule.forEach((day) => {
    day.tasks.forEach((task) => (counter += task.duration));
  });
  return counter;
};

const onDragEnd = (
  result,
  columns,
  unassignedTasks,
  setColumns,
  setUnassignedTasks
) => {
  if (!result.destination) return;
  console.log("Result: ", result);
  console.log("Columns: ", columns);
  console.log("setColumns: ", setColumns);
  const { source, destination } = result;

  const unassignedTaskId = unassignedTasks.columnId;

  //UNASSIGNED TASKS SERVICE

  if (
    unassignedTaskId === source.droppableId &&
    unassignedTaskId !== destination.droppableId
  ) {
    const destinationRow = columns.find((engineer) =>
      engineer.schedule.some(
        (item) => item.columnId === destination.droppableId
      )
    );

    const destColumn = destinationRow.schedule.find(
      (item) => item.columnId === destination.droppableId
    );

    const unassignedTasksCopy = unassignedTasks;

    const destTasks = [...destColumn.tasks];
    const [removed] = unassignedTasksCopy.tasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);
    destColumn.tasks = destTasks;

    setColumns([...columns, destinationRow]);
    setUnassignedTasks(unassignedTasksCopy);

    return;
  }

  if (
    unassignedTaskId !== source.droppableId &&
    unassignedTaskId === destination.droppableId
  ) {
    const sourceRow = columns.find((engineer) =>
      engineer.schedule.some((item) => item.columnId === source.droppableId)
    );

    const sourceColumn = sourceRow.schedule.find(
      (item) => item.columnId === source.droppableId
    );

    const unassignedTasksCopy = unassignedTasks;

    const sourceTasks = [...sourceColumn.tasks];
    const [removed] = sourceTasks.splice(source.index, 1);
    unassignedTasksCopy.tasks.splice(destination.index, 0, removed);
    sourceColumn.tasks = sourceTasks;

    setColumns([...columns, sourceRow]);
    setUnassignedTasks(unassignedTasksCopy);

    return;
  }

  if (
    unassignedTaskId === source.droppableId &&
    unassignedTaskId === destination.droppableId
  ) {
    const unassignedTasksCopy = unassignedTasks;

    const tasks = [...unassignedTasks.tasks];
    //   const copiedItems = [...tasks];
    const [removed] = tasks.splice(source.index, 1);
    tasks.splice(destination.index, 0, removed);
    unassignedTasksCopy.tasks = tasks;
    //   sourceColumn.tasks = copiedItems;
    setUnassignedTasks(unassignedTasksCopy);
    return;
  }

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

  //MODIFICATION WITHIN 2 DIFFERENT ENGINEERS
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
};

const AssignTasks = () => {
  // const [columns, setColumns] = useState(columnsFromBackend);
  const [columns, setColumns] = useState(columnsFTROT);
  const [unassignedTasks, setUnassignedTasks] = useState(
    unassignedTasksFromBackend
  );

  return (
    <DragDropContext
      onDragEnd={(result) =>
        onDragEnd(
          result,
          columns,
          unassignedTasks,
          setColumns,
          setUnassignedTasks
        )
      }
    >
      <div className="teamLeader assignTasks tasks__container">
        <div className="teamLeader assignTasks tasks__unassignedTasksBoard">
          <div key={unassignedTasks.columnId}>
            <h2>{`${unassignedTasks.name} | ${calculateTotalHoursInColumn(
              unassignedTasks.tasks
            )}h`}</h2>

            <Droppable
              droppableId={unassignedTasks.columnId}
              key={unassignedTasks.columnId}
            >
              {(provided, snapshot) => {
                return (
                  <div
                    className="teamLeader assignTasks tasks__unasignedTasksColumn"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgrey",
                    }}
                  >
                    {unassignedTasks.tasks.map((task, index) => {
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
                                className="tasks__eachTask"
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
          </div>
        </div>

        <div className="teamLeader assignTasks  tasks__engineersBoard">
          {columnsFTROT.map((column) => {
            return <TasksRow column={column} />;
          })}
        </div>
      </div>
    </DragDropContext>
  );
};

export default AssignTasks;
