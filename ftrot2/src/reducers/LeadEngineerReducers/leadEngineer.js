import { uuid } from "uuidv4";
import moment from "moment";
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../../actions/types";

const initialState = {
  workpackages: [
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
      tasks: [
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
      ],
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
      tasks: [
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
      ],
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
      tasks: [
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
      ],
    },
  ],
};

const leadEngineer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        workpackages: state.workpackages.map((workpackage) => {
          if (workpackage.id === payload.workpackageId) {
            return {
              ...workpackage,
              tasks: [...workpackage.tasks, payload.task],
            };
          }
          return workpackage;
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        workpackages: state.workpackages.map((workpackage) => {
          if (workpackage.id === payload.workpackageId)
            return {
              ...workpackage,
              tasks: workpackage.tasks.filter(
                (task) => task.id !== payload.taskId
              ),
            };
          return workpackage;
        }),
      };
    case EDIT_TASK:
      return {
        ...state,
        workpackages: state.workpackages.map((workpackage) => {
          if (workpackage.id === payload.workpackageId) {
            return {
              ...workpackage,
              tasks: workpackage.tasks.map((task) => {
                if (task.id === payload.taskId) return payload.editedTask;
                return task;
              }),
            };
          }
          return workpackage;
        }),
      };

    default:
      return state;
  }
};

export default leadEngineer;
