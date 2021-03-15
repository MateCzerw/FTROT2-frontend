import React, { useEffect, useState } from "react";
import Workpackage from "./Workpackage/Workpackage";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getWorkPackagesForLeadEngineer } from "../../../../actions/LeadEngineerActions/workpackageActions";

const StyledWorkpackagesBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color: #efefef;
`;

const StyledWorkpackagesContainer = styled.div`
  width: 60vw;
  margin-top: 10px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const StyledWorkpackagesHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
  background-color: #262729;
`;

const Workpackages = () => {
  const workpackages = useSelector((state) => state.leadEngineer.workpackages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkPackagesForLeadEngineer());
  }, []);

  return (
    <StyledWorkpackagesBackground>
      <StyledWorkpackagesContainer>
        <StyledWorkpackagesHeader>
          <h2>Workpackages</h2>
        </StyledWorkpackagesHeader>
        {workpackages.map((workpackage) => {
          const {
            id,
            name,
            tasksQuantity,
            finishedTasks,
            status,
            deadline,
            predictedFinish,
            description,
            tasks,
          } = workpackage;
          return (
            <Workpackage
              id={id}
              status={status}
              name={name}
              tasksQuantity={tasksQuantity}
              finishedTasks={finishedTasks}
              deadline={deadline}
              predictedFinish={predictedFinish}
              description={description}
              tasks={tasks}
            ></Workpackage>
          );
        })}
      </StyledWorkpackagesContainer>
    </StyledWorkpackagesBackground>
  );
};

export default Workpackages;
