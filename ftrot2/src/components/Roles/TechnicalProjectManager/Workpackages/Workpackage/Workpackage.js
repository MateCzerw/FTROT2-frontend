import React, { useState } from "react";
import WorkpackageEdit from "./WorkpackageEdit/WorkpackageEdit";
import WorkpackageDetails from "./WorkpackageDetails/WorkpackageDetails";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import styled from "styled-components";

const StyledWorkPackageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  color: #efefef;
`;

const StyledWorkPackageDescription = styled.div`
  background-color: #262729;
  padding: 10px;
  width: 60%;
  height: 200px;
  overflow-y: scroll;

  & > h3 {
    padding: 10px;
  }
  & > p {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledWorkPackageDetails = styled.div`
  background-color: #262729;
  margin-right: 10px;
  padding: 10px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledWorkPackageActions = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #262729;
  width: 15%;

  & > button {
    margin: 5px;
    width: 80%;
    color: #93c5fd;
    background-color: #00000033;
    display: flex;
    align-items: center;
  }

  & .MuiButton-label {
    display: flex;
    justify-content: flex-start;
  }
`;

const StyledWorkPackageInfo = styled.p`
  font-size: 15px;
  & > b {
    color: #b0b0b0;
    font-weight: bolder;
  }
`;

const Workpackage = ({
  id,
  name,
  tasksQuantity,
  finishedTasks,
  deadline,
  predictedFinish,
  description,
  handleWorkpackageDelete,
  handleWorkpackageEdit,
}) => {
  const [isWorkpackageEditOpen, setIsWorkpackageEditOpen] = useState(false);
  const [isWorkpackageDetailsOpen, setIsWorkpackageDetailsOpen] = useState(
    false
  );

  const handleWorkpackageEditOpen = () => {
    setIsWorkpackageEditOpen(true);
  };
  const handleWorkpackageEditClose = () => {
    setIsWorkpackageEditOpen(false);
  };

  const handleWorkpackageDetailsOpen = () => {
    setIsWorkpackageDetailsOpen(true);
  };

  const handleWorkpackageDetailsClose = () => {
    setIsWorkpackageDetailsOpen(false);
  };

  return (
    <StyledWorkPackageContainer>
      <StyledWorkPackageDetails>
        <h3>{name}</h3>
        <StyledWorkPackageInfo>
          <b>Tasks quantity: </b> {tasksQuantity}
        </StyledWorkPackageInfo>
        <StyledWorkPackageInfo>
          <b>Finished tasks: </b> {finishedTasks}
        </StyledWorkPackageInfo>
        <StyledWorkPackageInfo>
          <b>Due to: </b> {deadline}
        </StyledWorkPackageInfo>
        <StyledWorkPackageInfo>
          <b>Predicted due to: </b> {predictedFinish}
        </StyledWorkPackageInfo>
      </StyledWorkPackageDetails>
      <StyledWorkPackageDescription>
        <h3>Description:</h3>
        <p>{description}</p>
      </StyledWorkPackageDescription>
      <StyledWorkPackageActions>
        <Button
          variant="contained"
          startIcon={<InfoIcon />}
          onClick={handleWorkpackageDetailsOpen}
        >
          Details
        </Button>
        <WorkpackageDetails
          handleWorkpackageDetailsClose={handleWorkpackageDetailsClose}
          isWorkpackageDetailsOpen={isWorkpackageDetailsOpen}
          id={id}
        />
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={handleWorkpackageEditOpen}
        >
          Edit
        </Button>
        <WorkpackageEdit
          handleWorkpackageEditClose={handleWorkpackageEditClose}
          handleWorkpackageEdit={handleWorkpackageEdit}
          id={id}
          isWorkpackageEditOpen={isWorkpackageEditOpen}
        />
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={() => handleWorkpackageDelete(id)}
        >
          Delete
        </Button>
      </StyledWorkPackageActions>
    </StyledWorkPackageContainer>
  );
};

export default Workpackage;
