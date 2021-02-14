import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import { Doughnut } from "react-chartjs-2";
import "./AssignTasks.css";
import TasksColumn from "./TasksRow/TasksColumn/TasksColumn";
import EngineerDetails from "./TasksRow/EngineerDetails/EngineerDetails";
import TasksRow from "./TasksRow/TasksRow";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import styled from "styled-components";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin: 10px 0 10px 10px;
`;

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
      { columnId: uuid(), dayName: "Backlog", tasks: [] },
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
      { columnId: uuid(), dayName: "Backlog", tasks: [] },
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
      { columnId: uuid(), dayName: "Backlog", tasks: [] },
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
      { columnId: uuid(), dayName: "Backlog", tasks: [] },
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
  const [columns, setColumns] = useState(columnsFTROT);
  const [unassignedTasks, setUnassignedTasks] = useState(
    unassignedTasksFromBackend
  );

  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

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
      <StyledToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          Show Unassgined Tasks
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          Show Engineer panel
        </ToggleButton>
      </StyledToggleButtonGroup>

      <div className="teamLeader assignTasks tasks__container">
        <div className="teamLeader assignTasks tasks__unassignedTasksBoard">
          <TasksColumn
            columnId={unassignedTasks.columnId}
            tasks={unassignedTasks.tasks}
            dayName={unassignedTasks.name}
          />
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
