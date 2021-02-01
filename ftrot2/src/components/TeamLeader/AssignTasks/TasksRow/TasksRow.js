import React from "react";
import EngineerDetails from "./EngineerDetails/EngineerDetails";
import TasksColumn from "./TasksColumn/TasksColumn";
import "./TasksRow.css";

const TasksRow = ({ column }) => {
  return (
    <div className="teamLeader assignTasks  tasks__engineer">
      {column.schedule.map((day) => {
        const { columnId, dayName, tasks } = day;
        return (
          <TasksColumn
            columnId={columnId}
            tasks={tasks}
            dayName={dayName}
          ></TasksColumn>
        );
        // return generateColumnForOneDay(columnId, tasks, dayName);
      })}
      <EngineerDetails
        name={column.name}
        surname={column.surname}
        schedule={column.schedule}
      />
    </div>
  );
};

export default TasksRow;
