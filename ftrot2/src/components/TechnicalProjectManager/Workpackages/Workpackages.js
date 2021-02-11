import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Workpackage from "./Workpackage/Workpackage";
import "./Workpackages.css";

import moment from "moment";
import WorkpackageAdd from "./WorkpackageAdd/WorkpackageAdd";
import { uuid } from "uuidv4";
import { useDispatch, useSelector } from "react-redux";
import {
  createWorkpackage,
  deleteWorkpackage,
  editWorkpackage,
} from "../../../actions/TechnicalProjectManagerActions/workpackagesActions";

const Workpackages = () => {
  const workpackages = useSelector((state) => state.workpackages.workpackages);
  const dispatch = useDispatch();
  const [isWorkPackageAddOpen, setIsWorkPackageAddOpen] = useState(false);

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
    <div className="tpjm workpackages workpackages__background">
      <div className="tpjm workpackages workpackages__container">
        <div className="tpjm workpackages workpackages__header">
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

          <h2 className="tpjm workpackages workpackages__title">
            Workpackages
          </h2>
        </div>
        <div className="tpjm workpackages workpackages__list">
          {workpackages.map((workpackage) => (
            <Workpackage
              id={workpackage.id}
              name={workpackage.name}
              tasksQuantity={workpackage.tasksQuantity}
              finishedTasks={workpackage.finishedTasks}
              endDate={workpackage.endDate}
              predictedFinish={workpackage.predictedFinish}
              description={workpackage.description}
              handleWorkpackageDelete={handleWorkpackageDelete}
              handleWorkpackageEdit={handleWorkpackageEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workpackages;
