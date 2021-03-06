import React from "react";
import EngineerDetails from "./EngineerDetails/EngineerDetails";
import TasksColumn from "./TasksColumn/TasksColumn";
import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core";
import { getWeekWithTasksForTeamLeader } from "../../../../../actions/TeamLeaderActions/assignTasksActions";
import { useDispatch } from "react-redux";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const StyledPaper = styled(Paper)`
  padding: 10px;
  width: 100%;
`;

const TasksRow = ({ engineer, isProfileOpen }) => {
  const dispatch = useDispatch();

  const handleGetNextWeek = () => {
    dispatch(
      getWeekWithTasksForTeamLeader(
        engineer.week.weekNumber + 1,
        engineer.week.yearNumber,
        engineer.id
      )
    );
  };

  const handleGetPreviousWeek = () => {
    dispatch(
      getWeekWithTasksForTeamLeader(
        engineer.week.weekNumber - 1,
        engineer.week.yearNumber,
        engineer.id
      )
    );
  };

  return (
    <StyledPaper>
      <Grid container spacing={3}>
        <Grid item container>
          <Grid item container xs={1}>
            <NavigateBeforeIcon
              onClick={handleGetPreviousWeek}
            ></NavigateBeforeIcon>
          </Grid>
          <Grid item container xs={10}>
            <Grid item container spacing={2} xs={isProfileOpen ? 10 : 12}>
              {engineer?.week?.days?.map((day) => {
                const { id, tasks, dayName } = day;
                return (
                  <Grid item xs={2}>
                    <TasksColumn
                      key={id}
                      columnId={id}
                      tasks={tasks}
                      dayName={dayName}
                      isUnassignedTasks={false}
                    ></TasksColumn>
                  </Grid>
                );
                // return generateColumnForOneDay(columnId, tasks, dayName);
              })}
              <Grid item xs={2}>
                <TasksColumn
                  key={"Backlog_" + engineer.id}
                  columnId={0}
                  tasks={engineer.backlog}
                  isUnassignedTasks={false}
                  dayName={"Backlog"}
                ></TasksColumn>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={1}>
            <NavigateNextIcon onClick={handleGetNextWeek}></NavigateNextIcon>
          </Grid>
        </Grid>
        {isProfileOpen && (
          <Grid item xs={2}>
            <EngineerDetails
              name={engineer.firstName}
              surname={engineer.lastName}
              weekDetails={engineer.week?.days}
            />
          </Grid>
        )}
      </Grid>
    </StyledPaper>
  );
};

export default TasksRow;
