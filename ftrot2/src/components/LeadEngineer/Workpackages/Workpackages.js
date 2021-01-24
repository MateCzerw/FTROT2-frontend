import React, { useEffect, useState } from "react";
import Workpackage from "./Workpackage/Workpackage";
import moment from "moment";
import "./Workpackages.css";

const Workpackages = () => {
  const [workpackages, setWorkpackages] = useState([]);
  useEffect(() => {
    const initialState = [
      {
        id: 1,
        name: "HMC",
        tasksQuantity: 5,
        finishedTasks: 3,
        pid: 32568,
        endDate: moment(Date.now()).calendar(),
        predictedFinish: moment(Date.now()).calendar(),
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet, reprehenderit amet sint possimus est? Tempora doloribus quis nam quos ut iste, obcaecati sed eaque odit! Perspiciatis sapiente recusandae illo.",
      },
      {
        id: 2,
        name: "Volvo",
        tasksQuantity: 5,
        finishedTasks: 3,
        pid: 32568,
        endDate: moment(Date.now()).calendar(),
        predictedFinish: moment(Date.now()).calendar(),
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet, reprehenderit amet sint possimus est? Tempora doloribus quis nam quos ut iste, obcaecati sed eaque odit! Perspiciatis sapiente recusandae illo.",
      },
      {
        id: 3,
        name: "BMC",
        tasksQuantity: 5,
        finishedTasks: 3,
        pid: 32568,
        endDate: moment(Date.now()).calendar(),
        predictedFinish: moment(Date.now()).calendar(),
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet, reprehenderit amet sint possimus est? Tempora doloribus quis nam quos ut iste, obcaecati sed eaque odit! Perspiciatis sapiente recusandae illo.",
      },
    ];
    setWorkpackages(initialState);
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
            endDate,
            predictedFinish,
            description,
          } = workpackage;
          return (
            <Workpackage
              id={id}
              pid={pid}
              name={name}
              tasksQuantity={tasksQuantity}
              finishedTasks={finishedTasks}
              endDate={endDate}
              predictedFinish={predictedFinish}
              description={description}
            ></Workpackage>
          );
        })}
      </div>
    </div>
  );
};

export default Workpackages;
