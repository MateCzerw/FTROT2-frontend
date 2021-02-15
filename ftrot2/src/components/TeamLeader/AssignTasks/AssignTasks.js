import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import TasksColumn from "./TasksRow/TasksColumn/TasksColumn";
import TasksRow from "./TasksRow/TasksRow";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import styled from "styled-components";
import { Paper } from "@material-ui/core";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin: 10px 0 0 10px;
`;

const StyledMainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledUnassignedTasksContainer = styled(Paper)`
  margin: 10px;
  height: 100%;
  width: 15%;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledEngineersContainer = styled.div`
  width: 100%;
  height: calc(100vh - 58px);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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
      { columnId: uuid(), columnName: "Backlog", tasks: [] },
      { columnId: uuid(), columnName: "Monday", tasks: [] },
      { columnId: uuid(), columnName: "Tuesday", tasks: [] },
      { columnId: uuid(), columnName: "Wednesday", tasks: [] },
      { columnId: uuid(), columnName: "Thursday", tasks: [] },
      { columnId: uuid(), columnName: "Friday", tasks: [] },
    ],
  },
  {
    name: "Unassigned",
    isUnassignedTasks: true,
    schedule: [
      {
        columnId: uuid(),
        columnName: "Unassigned",
        tasks: itemsFromBackend,
      },
    ],
  },
];

const AssignTasks = () => {
  const [columns, setColumns] = useState(columnsFTROT);

  const findColumn = (id) => {
    let foundColumn = [];
    columns.forEach((eachEngineer) => {
      let tempTasks = eachEngineer.schedule.find(
        (column) => column.columnId === id
      );
      if (tempTasks !== undefined) foundColumn = tempTasks;
    });

    return foundColumn;
  };

  const saveColumnState = (
    sourceColumnId,
    sourceTaskIndex,
    destinationColumnId,
    destinationIndex,
    sourceColumn,
    destinationColumn
  ) => {
    if (sourceColumnId !== destinationColumnId) {
      const sourceTasks = [...sourceColumn.tasks];
      const destinationTasks = [...destinationColumn.tasks];
      const [removed] = sourceTasks.splice(sourceTaskIndex, 1);
      destinationTasks.splice(destinationIndex, 0, removed);
      sourceColumn.tasks = sourceTasks;
      destinationColumn.tasks = destinationTasks;

      let source = columns.find((eachEngineer) =>
        eachEngineer.schedule.some(
          (column) => column.columnId === sourceColumnId
        )
      );

      let destination = columns.find((eachEngineer) =>
        eachEngineer.schedule.some(
          (column) => column.columnId === destinationColumnId
        )
      );

      source = {
        ...source,
        schedule: source.schedule.map((column) => {
          if (column.columnId === sourceColumnId) return { sourceColumn };
          else return column;
        }),
      };

      destination = {
        ...destination,
        schedule: destination.schedule.map((column) => {
          if (column.columnId === destinationColumnId)
            return { destinationColumn };
          else return column;
        }),
      };

      setColumns([...columns, source, destination]);
    } else {
      const sourceTasks = [...sourceColumn.tasks];
      const copiedItems = [...sourceTasks];
      const [removed] = copiedItems.splice(sourceTaskIndex, 1);
      copiedItems.splice(destinationIndex, 0, removed);
      sourceColumn.tasks = copiedItems;

      let source = columns.find((eachEngineer) =>
        eachEngineer.schedule.some(
          (column) => column.columnId === sourceColumnId
        )
      );

      source = {
        ...source,
        schedule: source.schedule.map((column) => {
          if (column.columnId === sourceColumnId) return { sourceColumn };
          else return column;
        }),
      };

      setColumns([...columns, source]);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const columnSource = findColumn(source.droppableId);
    const columnDestination = findColumn(destination.droppableId);

    console.log(columnSource);
    console.log(columnDestination);
    saveColumnState(
      source.droppableId,
      source.index,
      destination.droppableId,
      destination.index,
      columnSource,
      columnDestination
    );
  };

  const [formats, setFormats] = useState(() => [
    "showUnassigneTasks",
    "showEngineerProfile",
  ]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <StyledToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="showUnassigneTasks" aria-label="bold">
          Show unassgined tasks
        </ToggleButton>
        <ToggleButton value="showEngineerProfile" aria-label="italic">
          Show engineer profile
        </ToggleButton>
      </StyledToggleButtonGroup>

      <StyledMainContainer>
        {formats.find((element) => element === "showUnassigneTasks") && (
          <StyledUnassignedTasksContainer>
            <TasksColumn
              columnId={
                columnsFTROT.find((column) => column.isUnassignedTasks)
                  .schedule[0].columnId
              }
              tasks={
                columnsFTROT.find((column) => column.isUnassignedTasks)
                  .schedule[0].tasks
              }
              dayName={
                columnsFTROT.find((column) => column.isUnassignedTasks)
                  .schedule[0].name
              }
              isUnassignedTasks={true}
            />
          </StyledUnassignedTasksContainer>
        )}
        <StyledEngineersContainer>
          {columnsFTROT
            .filter((column) => !column.isUnassignedTasks)
            .map((column) => {
              return (
                <TasksRow
                  column={column}
                  isProfileOpen={formats.find(
                    (element) => element === "showEngineerProfile"
                  )}
                />
              );
            })}
        </StyledEngineersContainer>
      </StyledMainContainer>
    </DragDropContext>
  );
};

export default AssignTasks;
