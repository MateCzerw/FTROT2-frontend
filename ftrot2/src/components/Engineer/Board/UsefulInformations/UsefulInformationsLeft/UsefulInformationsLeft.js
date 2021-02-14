import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledTasksList = styled.ul`
  height: 40vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  & > h3 {
    padding: 10px;
  }

  & > li {
    background-color: #414244;
    color: white;
    position: relative;
    margin: 10px 0;
    height: 40px;
    list-style: none;
    width: 100%;
    font-weight: 700;

    & > div {
      position: absolute;
      background-color: #bb432c;
      height: 100%;
    }

    & > p {
      position: absolute;
      padding: 10px;
      width: 60%;
      height: 100%;
    }

    & > p:last-child {
      text-align: end;
      position: absolute;
      right: 0;
      padding: 10px;
      width: 40%;
      height: 100%;
    }
  }
`;

const UsefulInformationsLeft = () => {
  const contentInfo = useSelector((state) => state.engineer.userInfo);
  return (
    <StyledTasksList>
      <h3>Tasks for 27.01.2021</h3>
      {contentInfo.currentTasks.map((task) => (
        <li>
          <div style={{ width: "50%" }}></div>

          <p>{task.name}</p>
          <p>
            {`Estimated time: 
              ${task.estimatedTime}`}
          </p>
        </li>
      ))}
    </StyledTasksList>
  );
};

export default UsefulInformationsLeft;
