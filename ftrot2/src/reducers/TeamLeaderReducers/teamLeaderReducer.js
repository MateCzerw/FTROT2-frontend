import { uuid } from "uuidv4";
import moment from "moment";
import { ASSIGN_TASK } from "../../actions/types";

const itemsFromBackend = [
  { id: uuid(), content: "First task", duration: 8 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
  { id: uuid(), content: "Fourth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
  { id: uuid(), content: "Sixth task", duration: 2 },
  { id: uuid(), content: "Seventh task", duration: 2 },
  { id: uuid(), content: "Eighth task", duration: 2 },
  { id: uuid(), content: "Ninth task", duration: 2 },
  { id: uuid(), content: "Tenth task", duration: 2 },
  { id: uuid(), content: "Eleventh task", duration: 2 },
  { id: uuid(), content: "Twelfth task", duration: 2 },
  { id: uuid(), content: "Thirteenth task", duration: 2 },
];

const items1 = [
  { id: uuid(), content: "First task", duration: 8 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
  { id: uuid(), content: "Fourth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },

  { id: uuid(), content: "Seventh task", duration: 2 },
];

const items2 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 6 },
  { id: uuid(), content: "Third task", duration: 2 },
];

const items3 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
];

const items4 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
];

const items5 = [
  { id: uuid(), content: "First task", duration: 2 },
  { id: uuid(), content: "Second task", duration: 2 },
  { id: uuid(), content: "Third task", duration: 2 },
  { id: uuid(), content: "Fourth task", duration: 2 },
  { id: uuid(), content: "Fifth task", duration: 2 },
];

const columnsFTROT = [
  {
    rowId: uuid(),
    name: "Mateusz",
    surname: "Czerwiński",
    week: 1,
    schedule: [
      { columnId: uuid(), dayName: "Backlog", tasks: [] },
      { columnId: uuid(), dayName: "Monday", tasks: items1 },
      { columnId: uuid(), dayName: "Tuesday", tasks: items2 },
      { columnId: uuid(), dayName: "Wednesday", tasks: items3 },
      { columnId: uuid(), dayName: "Thursday", tasks: items4 },
      { columnId: uuid(), dayName: "Friday", tasks: items5 },
    ],
  },
  {
    rowId: uuid(),
    name: "Bartosz",
    surname: "Kozłowski",
    week: 1,
    schedule: [
      { columnId: uuid(), dayName: "Backlog", tasks: [] },
      { columnId: uuid(), dayName: "Monday", tasks: [] },
      { columnId: uuid(), dayName: "Tuesday", tasks: [] },
      { columnId: uuid(), dayName: "Wednesday", tasks: [] },
      { columnId: uuid(), dayName: "Thursday", tasks: [] },
      { columnId: uuid(), dayName: "Friday", tasks: [] },
    ],
  },
  {
    rowId: uuid(),
    name: "Agnieszka",
    surname: "Leszczuk",
    week: 1,
    schedule: [
      { columnId: uuid(), dayName: "Backlog", tasks: [] },
      { columnId: uuid(), dayName: "Monday", tasks: [] },
      { columnId: uuid(), dayName: "Tuesday", tasks: [] },
      { columnId: uuid(), dayName: "Wednesday", tasks: [] },
      { columnId: uuid(), dayName: "Thursday", tasks: [] },
      { columnId: uuid(), dayName: "Friday", tasks: [] },
    ],
  },
  {
    rowId: uuid(),
    name: "Marek",
    surname: "Repeła",
    week: 1,
    schedule: [
      { columnId: uuid(), columnName: "Backlog", tasks: [] },
      { columnId: uuid(), columnName: "Monday", tasks: [] },
      { columnId: uuid(), columnName: "Tuesday", tasks: [] },
      { columnId: uuid(), columnName: "Wednesday", tasks: [] },
      { columnId: uuid(), columnName: "Thursday", tasks: [] },
      { columnId: uuid(), columnName: "Friday", tasks: [] },
    ],
  },
  {
    rowId: uuid(),
    name: "Unassigned",
    isUnassignedTasks: true,
    schedule: [
      {
        columnId: uuid(),
        columnName: "Unassigned",
        tasks: itemsFromBackend,
      },
    ],
  },
];

const userInfo = {
  name: "Wojciech",
  surname: "Zabiegło",
  picture:
    "https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo",
  role: "Team Leader",
  team: "DLSC2",
  supervisor: "Łukasz Szczuplak",
  joinedAt: moment(Date.now()).calendar(),
  teamMembersQuantity: 8,
  workPackagesInProgress: 12,
  workPackages: [
    { name: "HMC", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
    { name: "BMC", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
    {
      name: "Volvo",
      tasksStatus: 0.5,
      dueTo: moment(Date.now()).calendar(),
    },
    { name: "Daf", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
    {
      name: "Iveco",
      tasksStatus: 0.5,
      dueTo: moment(Date.now()).calendar(),
    },
  ],
  statusOfWorkpackages: [160, 20, 10],
};

const initialState = {
  columns: columnsFTROT,
  userInfo,
};

const teamLeader = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ASSIGN_TASK:
      return {
        ...state,
        columns: state.columns.map((column) => {
          payload.forEach((element) => {
            if (column.rowId === element.rowId) column = element;
          });
          // if (column.rowId === payload[0].rowId) return payload[0];
          return column;
        }),
      };

    default:
      return state;
  }
};

export default teamLeader;
