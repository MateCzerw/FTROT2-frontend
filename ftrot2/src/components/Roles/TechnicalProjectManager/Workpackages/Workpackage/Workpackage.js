import React, { useState } from "react";
import "./Workpackage.css";
import WorkpackageEdit from "./WorkpackageEdit/WorkpackageEdit";
import WorkpackageDetails from "./WorkpackageDetails/WorkpackageDetails";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
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
  tasks,
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
    <div className="tpjm workpackages workpackage">
      <div className="tpjm workpackages workpackage__details">
        <h3>{name}</h3>
        <p className="tpjm workpackages workpackage__info">
          <b>Tasks quantity: </b> {tasksQuantity}
        </p>
        <p className="tpjm workpackages workpackage__info">
          <b>Finished tasks: </b> {finishedTasks}
        </p>
        <p className="tpjm workpackages workpackage__info">
          <b>Due to: </b> {deadline}
        </p>
        <p className="tpjm workpackages workpackage__info">
          <b>Predicted due to: </b> {predictedFinish}
        </p>
      </div>
      <div className="tpjm workpackages workpackage__description">
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className="tpjm workpackages workpackage__actions">
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
          tasks={tasks}
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
      </div>
    </div>
  );
};

export default Workpackage;
