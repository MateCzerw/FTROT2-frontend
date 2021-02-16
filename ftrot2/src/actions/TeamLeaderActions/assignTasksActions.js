import axios from "axios";
import { ASSIGN_TASK } from "../types";

export const setNewColumnForTasks = (
  sourceColumnId,
  sourceTaskIndex,
  destinationColumnId,
  destinationIndex,
  sourceColumn,
  destinationColumn,
  columns
) => async (dispatch) => {
  if (sourceColumnId !== destinationColumnId) {
    const sourceTasks = [...sourceColumn.tasks];
    const destinationTasks = [...destinationColumn.tasks];
    const [removed] = sourceTasks.splice(sourceTaskIndex, 1);
    destinationTasks.splice(destinationIndex, 0, removed);
    sourceColumn.tasks = sourceTasks;
    destinationColumn.tasks = destinationTasks;

    let source = columns.find((eachEngineer) =>
      eachEngineer.schedule.some((column) => column.columnId === sourceColumnId)
    );

    let destination = columns.find((eachEngineer) =>
      eachEngineer.schedule.some(
        (column) => column.columnId === destinationColumnId
      )
    );

    source = {
      ...source,
      schedule: source.schedule.map((column) => {
        if (column.columnId === sourceColumnId) return sourceColumn;
        else return column;
      }),
    };

    destination = {
      ...destination,
      schedule: destination.schedule.map((column) => {
        if (column.columnId === destinationColumnId) return destinationColumn;
        else return column;
      }),
    };

    dispatch({
      type: ASSIGN_TASK,
      payload: [source, destination],
    });
  } else {
    const sourceTasks = [...sourceColumn.tasks];
    const copiedItems = [...sourceTasks];
    const [removed] = copiedItems.splice(sourceTaskIndex, 1);
    copiedItems.splice(destinationIndex, 0, removed);
    sourceColumn.tasks = copiedItems;

    let source = columns.find((eachEngineer) =>
      eachEngineer.schedule.some((column) => column.columnId === sourceColumnId)
    );

    source = {
      ...source,
      schedule: source.schedule.map((column) => {
        if (column.columnId === sourceColumnId) return sourceColumn;
        else return column;
      }),
    };
    dispatch({
      type: ASSIGN_TASK,
      payload: [source],
    });
  }
};
