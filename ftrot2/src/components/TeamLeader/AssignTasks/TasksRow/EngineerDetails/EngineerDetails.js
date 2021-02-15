import { Card } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const StyledContainer = styled(Card)`
  margin-top: 0px;
  width: 100%;
  height: 40vh;
`;

const StyledEngineerDetails = styled(Card)`
  margin-top: 0px;
  width: 100%;
  padding: 10px;
  background-color: gray;
  display: flex;

  & > img {
    height: 100px;
    object-fit: contain;
  }
`;

const StyledEngineerName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const StyledDoughnutContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > p {
    position: absolute;
    font-weight: bold;
    font-size: 30px;
  }
`;

const calculateTotalHoursInRow = (schedule) => {
  let counter = 0;
  schedule.forEach((day) => {
    day.tasks.forEach((task) => (counter += task.duration));
  });
  return counter;
};

const EngineerDetails = ({ name, surname, schedule }) => {
  return (
    <StyledContainer>
      <StyledEngineerDetails>
        <StyledEngineerName>
          <p>
            <b>Name:</b>
          </p>
          <p>{name}</p>
          <p>
            <b>Surname:</b>
          </p>
          <p>{surname}</p>
        </StyledEngineerName>
        <img
          src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="User"
        ></img>
      </StyledEngineerDetails>
      <StyledDoughnutContainer>
        <Doughnut
          data={{
            labels: ["Assigned", "Unassiged", "Overtime"],
            datasets: [
              {
                data: [
                  calculateTotalHoursInRow(schedule) > 40
                    ? 40
                    : calculateTotalHoursInRow(schedule),
                  40 - calculateTotalHoursInRow(schedule) > 0
                    ? 40 - calculateTotalHoursInRow(schedule)
                    : 0,
                  calculateTotalHoursInRow(schedule) - 40 > 0
                    ? calculateTotalHoursInRow(schedule) - 40
                    : 0,
                ],
                backgroundColor: ["green", "gray", "red"],
              },
            ],
          }}
          width={"100%"}
          height={"100%"}
          options={{
            maintainAspectRatio: false,
            legend: false,
            centerText: {
              display: true,
              text: `90%`,
            },
          }}
        ></Doughnut>
        <p className="teamLeader assignTasks tasks__chartText">{`${calculateTotalHoursInRow(
          schedule
        )} / 40`}</p>
      </StyledDoughnutContainer>
    </StyledContainer>
  );
};

export default EngineerDetails;
