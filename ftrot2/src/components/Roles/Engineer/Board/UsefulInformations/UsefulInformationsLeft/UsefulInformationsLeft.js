import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
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
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-evenly; */

  &::-webkit-scrollbar {
    display: none;
  }

  & > li {
    background-color: #414244;
    color: white;
    position: relative;
    margin: 10px 0;
    height: 100px;
    list-style: none;
    width: 100%;
    font-weight: 700;

    & > div {
      position: absolute;
      background-color: #bb432c;
      height: 100%;
    }

    & > p {
      top: 25%;
      padding: 10px;
      width: 60%;
      position: absolute;
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

const getClosestWorkingDay = () => {
  if (moment(Date.now()).isoWeekday() === 6)
    return moment(Date.now()).subtract(1, "days").format("LL");
  if (moment(Date.now()).isoWeekday() === 7)
    return moment(Date.now()).subtract(2, "days").format("LL");

  return moment(Date.now()).format("LL");
};

const UsefulInformationsLeft = () => {
  const contentInfo = useSelector((state) => state.engineer.userInfo);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getUserTasks());
  }, []);

  return (
    <StyledContainer>
      {loading && (
        <CircularProgress color="primary" size={100}></CircularProgress>
      )}
      {!loading && (
        <>
          <h3>{`Tasks for ${getClosestWorkingDay()}`}</h3>
          <StyledListOfTasks>
            {contentInfo.currentTasks?.map((task) => (
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
