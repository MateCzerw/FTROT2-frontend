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
        endDate: moment(Date.now()).calendar(),
        predictedFinish: moment(Date.now()).calendar(),
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet, reprehenderit amet sint possimus est? Tempora doloribus quis nam quos ut iste, obcaecati sed eaque odit! Perspiciatis sapiente recusandae illo.",
      },
    ];
    setWorkpackages(initialState);
  }, []);
  return (
    <div className="workpackages">
      <div className="workpackages__container">
        <div className="workpackages__header">
          <h2>Workpackages</h2>
        </div>
        <Workpackage></Workpackage>
        <Workpackage></Workpackage>
        <Workpackage></Workpackage>
        <Workpackage></Workpackage>
        <Workpackage></Workpackage>
      </div>
    </div>
  );
};

export default Workpackages;
