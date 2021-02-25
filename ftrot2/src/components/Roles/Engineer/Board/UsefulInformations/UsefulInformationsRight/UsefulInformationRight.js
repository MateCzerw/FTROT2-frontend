import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { getGraphDetails } from "../../../../../../actions/EngineerActions/boardActions";

const StyledDoughnutContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  & > h3 {
    margin-left: 10px;
    padding: 10px;
  }
  & > div {
    align-self: center;
    width: 80%;
    height: 80%;
    min-height: 300px;
  }
`;

const UsefulInformationRight = () => {
  const [loading, setLoading] = useState(false);
  const statusOfWorkInCurrentWeek = useSelector(
    (state) => state.engineer.statusOfWorkInCurrentWeek
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getGraphDetails(1, 2021)).finally(setLoading(false));
  }, []);
  return (
    <StyledDoughnutContainer>
      <h3>Work in CW01</h3>
      <div>
        <Doughnut
          data={{
            labels: ["Planned", "Unassigned", "Overwork hours"],
            datasets: [
              {
                data: statusOfWorkInCurrentWeek,
                backgroundColor: ["green", "gray", "red"],
              },
            ],
          }}
          width={"100%"}
          height={"100%"}
          options={{ maintainAspectRatio: false }}
        ></Doughnut>
      </div>
    </StyledDoughnutContainer>
  );
};

export default UsefulInformationRight;
