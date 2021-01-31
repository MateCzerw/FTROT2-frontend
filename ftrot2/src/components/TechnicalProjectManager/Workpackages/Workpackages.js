import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextareaAutosize,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Workpackage from "./Workpackage/Workpackage";
import "./Workpackages.css";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import moment from "moment";
import WorkpackageAdd from "./WorkpackageAdd/WorkpackageAdd";

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

const Workpackages = () => {
  const [workpackages, setWorkpackages] = useState([]);
  const [isWorkPackageAddOpen, setIsWorkPackageAddOpen] = useState(false);

  const handleAddWorkPackageOpen = () => {
    setIsWorkPackageAddOpen(true);
  };
  const handleAddWorkPackageClose = () => {
    setIsWorkPackageAddOpen(false);
  };

  const addWorkPackage = (values) => {
    setWorkpackages([...workpackages, values]);
  };

  const handleWorkpackageDelete = (id) => {
    setWorkpackages(workpackages.filter((item) => item.id !== id));
  };

  const handleWorkpackageEdit = (id, workpackage) => {
    setWorkpackages(
      workpackages.map((item) => {
        if (item.id === id) return workpackage;
        else return item;
      })
    );
  };

  useEffect(() => {
    setWorkpackages(initialState);
  }, []);

  return (
    <div className="tpjm workpackages">
      <div className="tpjm workpackages__container">
        <div className="tpjm workpackages__header">
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
            addWorkPackage={addWorkPackage}
          />

          <div className=" tpjm workpackages__titleContainer">
            <h2>Workpackages</h2>
          </div>
        </div>
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
  );
};

export default Workpackages;
