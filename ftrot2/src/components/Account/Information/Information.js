import React from "react";
import "./Information.css";
import moment from "moment";
const userInfo = {
  mail: "mateczerw@gmail.com",
  name: "Mateusz",
  surname: "Czerwiński",
  dateOfBirth: moment().subtract(30, "years").calendar(),
};

const Information = () => {
  return <div>date of Birth: {userInfo.dateOfBirth}</div>;
};

export default Information;
