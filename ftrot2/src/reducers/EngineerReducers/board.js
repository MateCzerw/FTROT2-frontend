import { uuid } from "uuidv4";
import moment from "moment";
import { GET_INFO } from "../../actions/types";

const userInfo = {
  name: "Mateusz",
  surname: "Czerwiński",
  team: "DLSC2",
  role: "Lead Eangineer",
  supervisor: "Wojciech Zabiegło",
  joinedAt: moment(Date.now()).calendar(),
  picture: "",
  FTRORTratio: 0.05,
  unfinishedTasks: 10,
  currentTasks: [
    { name: "Wypełnić Ftrot", status: 0.9, estimatedTime: 4 },
    { name: "Zrobić rysunek", status: 1, estimatedTime: 4 },
    { name: "Zrobić model obudowy", status: 0.9, estimatedTime: 4 },
    { name: "Zrobić model Pedału", status: 1, estimatedTime: 4 },
    { name: "Zrobić wniosek Patentowy", status: 0.9, estimatedTime: 4 },
    { name: "Zrobić efficieny", status: 1, estimatedTime: 4 },
  ],
  statusOfWorkInCurrentWeek: [35, 5, 5],
};

const initialState = {
  userInfo: userInfo,
  reworkHours: [5, 6, 7, 8, 5, 4, 3, 2, 5, 9, 12, 11],
};

const boardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_INFO:
      return { ...state };

    default:
      return state;
  }
};

export default boardReducer;
