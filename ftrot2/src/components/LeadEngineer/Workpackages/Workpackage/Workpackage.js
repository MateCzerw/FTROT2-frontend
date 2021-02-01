import { Button, TextField, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Workpackage.css";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Tasks from "./Tasks/Tasks";
import { uuid } from "uuidv4";
import TaskAdd from "./TaskAdd/TaskAdd";

const validationSchema = yup.object({
  // email: yup
  //   .string("Enter your email")
  //   .email("Enter a valid email")
  //   .required("Email is required"),
  // password: yup
  //   .string("Enter your password")
  //   .min(8, "Password should be of minimum 8 characters length")
  //   .required("Password is required"),
  name: yup
    .string("Enter your name")
    .min(5, "Name should be of minimum 5 characters length")
    .required("Name is required"),
  description: yup
    .string("Enter workpackage description")
    .min(10, "Description should be of minimum 10 characters length")
    .required("Description is required"),
});

const initialState = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    duration: 2,
    status: 0.5,
    details: {
      assignedEngineer: "Jan Kowalski",
      plannedAt: moment(Date.now()).calendar(),
    },
  },
  {
    id: uuid(),
    name: "FEM of housing",
    duration: 2,
    status: 0.5,
    details: {
      assignedEngineer: "Jan Kowalski",
      plannedAt: moment(Date.now()).calendar(),
    },
  },
  {
    id: uuid(),
    name: "DFMEA",
    duration: 2,
    status: 0.5,
    details: {
      assignedEngineer: "Jan Kowalski",
      plannedAt: moment(Date.now()).calendar(),
    },
  },
  {
    id: uuid(),
    name: "Design review",
    duration: 10,
    status: 0.5,
    details: {
      assignedEngineer: "Jan Kowalski",
      plannedAt: moment(Date.now()).calendar(),
    },
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    duration: 2,
    status: 0.5,
    details: {
      assignedEngineer: "Jan Kowalski",
      plannedAt: moment(Date.now()).calendar(),
    },
  },
];

const Workpackage = ({
  id,
  name,
  tasksQuantity,
  finishedTasks,
  pid,
  endDate,
  predictedFinish,
  description,
  handleWorkpackageDelete,
  handleWorkpackageEdit,
}) => {
  const [tasks, setTasks] = useState([]);
  const [isTaskAddOpen, setIsTaskAddOpen] = useState(false);

  const handleTaskAddOpen = () => {
    setIsTaskAddOpen(true);
  };
  const handleTaskAddClose = () => {
    setIsTaskAddOpen(false);
  };

  const handleTaskAdd = (values) => {
    const taskAdded = Object.assign({}, { id: uuid() }, values);
    setTasks([...tasks, taskAdded]);
  };

  const handleTaskDelete = (id) => {
    alert("Usunięto zadanie o id: " + id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleTaskEdit = (id, task) => {
    const updatedTasks = tasks.map((element) => {
      if (element.id === id) {
        return {
          id,
          name: task.name,
          duration: task.duration,
          status: task.status,
        };
      }
      return element;
    });
    setTasks(updatedTasks);
  };

  useEffect(() => {
    setTasks(initialState);
  }, []);

  return (
    <div className="leadEngineer workpackage">
      <div className="leadEngineer workpackage__details">
        <div className="leadEngineer workpackage__info">
          <h3>Name: {name}</h3>
          <h4>PID: {pid}</h4>
          <h4>finished tasks: {finishedTasks}</h4>
          <h4>Due to: {endDate}</h4>
          <h4>Predicted due to: {predictedFinish}</h4>
        </div>
        <div className="leadEngineer workpackage__description">
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="leadEngineer workpackage__tasks">
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
      </div>
    </div>
  );
};

export default Workpackage;
