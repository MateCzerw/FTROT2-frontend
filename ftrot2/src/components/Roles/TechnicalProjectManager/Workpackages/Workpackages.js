import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Workpackage from "./Workpackage/Workpackage";
import { getWorkPackages } from "../../../../actions/TechnicalProjectManagerActions/workpackagesActions";
import WorkpackageAdd from "./WorkpackageAdd/WorkpackageAdd";
import { useDispatch, useSelector } from "react-redux";
import {
  createWorkpackage,
  deleteWorkpackage,
  editWorkpackage,
} from "../../../../actions/TechnicalProjectManagerActions/workpackagesActions";
import styled from "styled-components";

const StyledWorkPackageBackground = styled.div`
  display: flex;
  background-color: #303133;
  width: 100%;
  min-height: calc(100vh - 58px);
  justify-content: center;
  color: #efefef;
`;

const StyledWorkPackageContainer = styled.div`
  margin: 10px 0 0 0;
  padding: 10px;
  display: flex;
  width: 80%;
  flex-direction: column;
`;

const StyledWorkPackageHeader = styled.div`
  background-color: #1d1d1f;
  position: relative;
  display: flex;
  align-items: center;

  & > button {
    position: absolute;
    left: 10px;
  }
`;

const StyledWorkPackageTitle = styled.h2`
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Workpackages = () => {
  const workpackages = useSelector(
    (state) => state.technicalProjectManager.workpackages
  );
  const dispatch = useDispatch();
  const [isWorkPackageAddOpen, setIsWorkPackageAddOpen] = useState(false);

  useEffect(() => {
    dispatch(getWorkPackages());
  }, []);

  const handleAddWorkPackageOpen = () => {
    setIsWorkPackageAddOpen(true);
  };
  const handleAddWorkPackageClose = () => {
    setIsWorkPackageAddOpen(false);
  };

  const addWorkpackage = (workpackage) => {
    dispatch(createWorkpackage(workpackage));
  };

  const handleWorkpackageDelete = (id) => {
    dispatch(deleteWorkpackage(id));
  };

  const handleWorkpackageEdit = (id, workpackage) => {
    dispatch(editWorkpackage(id, workpackage));
  };

  return (
    <StyledWorkPackageBackground>
      <StyledWorkPackageContainer>
        <StyledWorkPackageHeader>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAddWorkPackageOpen}
          >
            Add new Workpackage
          </Button>
          <WorkpackageAdd
            isWorkPackageAddOpen={isWorkPackageAddOpen}
            handleAddWorkPackageClose={handleAddWorkPackageClose}
            addWorkPackage={addWorkpackage}
          />

          <StyledWorkPackageTitle>Workpackages</StyledWorkPackageTitle>
        </StyledWorkPackageHeader>
        <div>
          {workpackages.map((workpackage) => (
            <Workpackage
              id={workpackage.id}
              name={workpackage.name}
              status={workpackage.status * 100 + "%"}
              tasksQuantity={workpackage.tasksQuantity}
              finishedTasks={workpackage.finishedTasks}
              deadline={workpackage.deadline}
              predictedFinish={workpackage.predictedFinish}
              description={workpackage.description}
              handleWorkpackageDelete={handleWorkpackageDelete}
              handleWorkpackageEdit={handleWorkpackageEdit}
            />
          ))}
        </div>
      </StyledWorkPackageContainer>
    </StyledWorkPackageBackground>
  );
};

export default Workpackages;
