import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserTasks } from "../../../../../../actions/EngineerActions/boardActions";

const StyledContainer = styled.div`
  width: 100%;

  & > h3 {
    padding: 10px;
  }
`;

const StyledListOfTasks = styled.ul`
  height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &::-webkit-scrollbar {
    display: none;
  }

  & > li {
    background-color: #414244;
    color: white;
    position: relative;
    margin: 10px 0;
    height: 200px;
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
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(getUserTasks()).then(setLoading(false));
    }, 2000);
  }, []);

  return (
    <StyledContainer>
      {loading && (
        <CircularProgress color="primary" size={100}></CircularProgress>
      )}
      {!loading && (
        <>
          <h3>Tasks for 27.01.2021</h3>
          <StyledListOfTasks>
            {contentInfo.currentTasks.map((task) => (
              <li>
                <div style={{ width: `${task.status * 100}%` }}></div>

                <p>{task.name}</p>
                <p>
                  {`Estimated time: 
              ${task.estimatedTime}`}
                </p>
              </li>
            ))}
          </StyledListOfTasks>
        </>
      )}
    </StyledContainer>
  );
};

export default UsefulInformationsLeft;
