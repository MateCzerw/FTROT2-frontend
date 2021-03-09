import React, { useEffect, useState } from "react";
import Workpackage from "./Workpackage/Workpackage";
import moment from "moment";
import "./Workpackages.css";
import { useDispatch, useSelector } from "react-redux";
import { getWorkPackagesForLeadEngineer } from "../../../../actions/LeadEngineerActions/workpackageActions";

const Workpackages = () => {
  const workpackagesFromSelector = useSelector(
    (state) => state.leadEngineer.workpackages
  );
  const workpackages = JSON.parse(JSON.stringify(workpackagesFromSelector));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkPackagesForLeadEngineer());
  }, []);

  return (
    <div className="leadEngineer workpackages">
      <div className="leadEngineer workpackages__container">
        <div className="leadEngineer workpackages__header">
          <h2>Workpackages</h2>
        </div>
        {workpackages.map((workpackage) => {
          const {
            id,
            name,
            tasksQuantity,
            finishedTasks,
            pid,
            deadline,
            predictedFinish,
            description,
            tasks,
          } = workpackage;
          return (
            <Workpackage
              id={id}
              pid={pid}
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
      </div>
    </div>
  );
};

export default Workpackages;
