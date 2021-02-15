import { uuid } from "uuidv4";

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
    name: "Marek",
    surname: "Repeła",
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
];

const unassignedTasksFromBackend = {
  columnId: uuid(),
  name: "Unassigned",
  tasks: itemsFromBackend,
};

const initialState = {
  columns: columnsFTROT,
  unassignedTasks: unassignedTasksFromBackend,
};

const teamLeader = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default teamLeader;
