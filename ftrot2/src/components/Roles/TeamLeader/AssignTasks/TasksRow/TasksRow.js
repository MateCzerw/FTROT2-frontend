import React from "react";
import EngineerDetails from "./EngineerDetails/EngineerDetails";
import TasksColumn from "./TasksColumn/TasksColumn";
import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core";

const StyledPaper = styled(Paper)`
  padding: 10px;
  width: 100%;
`;

const TasksRow = ({ column, isProfileOpen }) => {
  return (
    <StyledPaper>
      <Grid container spacing={3}>
        <Grid item container spacing={2} xs={isProfileOpen ? 10 : 12}>
          {column.schedule.map((day) => {
            const { columnId, dayName, tasks } = day;
            return (
              <Grid item xs={2}>
                <TasksColumn
                  columnId={columnId}
                  tasks={tasks}
                  dayName={dayName}
                ></TasksColumn>
              </Grid>
            );
            // return generateColumnForOneDay(columnId, tasks, dayName);
          })}
        </Grid>
        {isProfileOpen && (
          <Grid item xs={2}>
            <EngineerDetails
              name={column.name}
              surname={column.surname}
              schedule={column.schedule}
            />
          </Grid>
        )}
      </Grid>
    </StyledPaper>
  );
};

export default TasksRow;
