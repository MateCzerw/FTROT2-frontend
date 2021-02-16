import React from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

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
  const contentInfo = useSelector((state) => state.leadEngineer.userInfo);
  return (
    <StyledDoughnutContainer>
      <h3>Status of own workpackages</h3>
      <div>
        <Doughnut
          data={{
            labels: ["On Time", "Stoped", "Deleyed"],
            datasets: [
              {
                data: contentInfo.statusOfWorkpackages,
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
