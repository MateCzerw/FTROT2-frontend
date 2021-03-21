import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Tasks from "./Tasks/Tasks";
import TaskAdd from "./TaskAdd/TaskAdd";
import {
  addTaskAction,
  deleteTaskAction,
  editTaskAction,
} from "../../../../../actions/LeadEngineerActions/workpackageActions";
import { useDispatch } from "react-redux";
import moment from "moment";
import styled from "styled-components";

const StyledWorkPackageContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #262729;
`;

const StyledWorkPackageDetails = styled.div`
  display: flex;
`;

const StyledWorkPackageInfo = styled.div`
  flex: 0.3;
  padding: 10px;

  & b {
    color: #b0b0b0;
    font-weight: bold;
  }
`;

const StyledWorkPackageDescription = styled.div`
  flex: 0.7;
  padding: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & > p {
    margin-top: 10px;
  }

  & > h3 {
    color: #b0b0b0;
  }
`;

const StyledWorkPackageTasks = styled.div`
  padding: 10px;
  flex-direction: column;

  & > button {
    margin-top: 10px;
    width: 100%;
    background-color: #1e1f21;
    color: #93c5fd;
  }
`;

const Workpackage = ({
  id,
  name,
  finishedTasks,
  status,
  deadline,
  predictedFinish,
  description,
  tasks,
}) => {
  const [isTaskAddOpen, setIsTaskAddOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTaskAddOpen = () => {
    setIsTaskAddOpen(true);
  };
  const handleTaskAddClose = () => {
    setIsTaskAddOpen(false);
  };

  const handleTaskAdd = (task) => {
    dispatch(addTaskAction(id, task));
  };

  const handleTaskDelete = (taskId) => {
    dispatch(deleteTaskAction(id, taskId));
  };

  const handleTaskEdit = (taskId, editedTask) => {
    dispatch(
      editTaskAction(id, taskId, {
        ...editedTask,
        details: {
          assignedEngineer: "Jan Kowalski",
          plannedAt: moment(Date.now()).calendar(),
        },
      })
    );
  };

  return (
    <StyledWorkPackageContainer>
      <StyledWorkPackageDetails>
        <StyledWorkPackageInfo>
          <h3>{name}</h3>
          <h4>
            <b>Status:</b> {status * 100}%
          </h4>
          <h4>
            <b>finished tasks:</b> {finishedTasks}
          </h4>
          <h4>
            <b>Due to:</b> {deadline}
          </h4>
          <h4>
            <b>Predicted due to:</b> {predictedFinish}
          </h4>
        </StyledWorkPackageInfo>
        <StyledWorkPackageDescription>
          <h3>Description:</h3>
          <p className="leadEngineer workpackage__descriptionText">
            {description}
          </p>
        </StyledWorkPackageDescription>
      </StyledWorkPackageDetails>
      <StyledWorkPackageTasks>
        <Tasks
          tasks={tasks}
          handleTaskDelete={handleTaskDelete}
          handleTaskEdit={handleTaskEdit}
        ></Tasks>
        <Button variant="contained" color="primary" onClick={handleTaskAddOpen}>
          Add Task
        </Button>
        <TaskAdd
          isTaskAddOpen={isTaskAddOpen}
          handleTaskAddClose={handleTaskAddClose}
          handleTaskAdd={handleTaskAdd}
        />
      </StyledWorkPackageTasks>
    </StyledWorkPackageContainer>
  );
};

export default Workpackage;
