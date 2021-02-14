import React, { useState } from "react";

import { Doughnut, Line } from "react-chartjs-2";

import { AppBar, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import TabPanel from "./board/TabPanel";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledBackground = styled.main`
  display: flex;
  padding: 10px 12px;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: #efefef;
  font-size: 14px;
`;

const StyledUserDetails = styled(Paper)`
  margin: 10px 0;
  padding: 10px;
  background-color: #1d1d1f;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & img {
    object-fit: fill;
    width: 100px;
    border-radius: 10%;
  }
`;

const StyledUsefulInformations = styled(Paper)`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const StyledInfoColumn = styled(Grid)`
  font-size: 20px;
  & b {
    color: #b0b0b0;
    font-weight: bolder;
  }
`;

const StyledGraphs = styled(Paper)`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 40vh;
`;

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

const graphData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Rework hours",
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const EngineerBoard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const contentInfo = useSelector((state) => state.board.userInfo);
  const reworkHours = useSelector((state) => state.board.reworkHours);

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <StyledBackground>
      <Grid container spacing={3} justify="center">
        {/* <section className="engineer board board__container"> */}
        <Grid item xs={8}>
          <StyledUserDetails>
            <Grid container spacing={2} justify="space-between">
              <Grid item xs={4} md={1}>
                <img
                  src="https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt="Mateusz Czerwiński"
                ></img>
              </Grid>
              <Grid item container xs={8} md={11} justify="space-evenly">
                <StyledInfoColumn
                  item
                  container
                  xs={12}
                  sm={6}
                  xl={3}
                  justify="flex-start"
                >
                  <p>
                    <b>Name:</b> {contentInfo.name}
                  </p>
                  <p>
                    <b>Surname:</b> {contentInfo.surname}
                  </p>
                </StyledInfoColumn>
                <StyledInfoColumn
                  item
                  container
                  justify="flex-start"
                  xs={12}
                  sm={6}
                  xl={3}
                >
                  <p>
                    <b>Team:</b> {contentInfo.team}
                  </p>
                  <p>
                    <b>Role:</b> {contentInfo.role}
                  </p>
                </StyledInfoColumn>
                <StyledInfoColumn
                  item
                  container
                  justify="flex-start"
                  xs={12}
                  sm={6}
                  xl={3}
                >
                  <p>
                    <b>Supervisor:</b> {contentInfo.supervisor}
                  </p>
                  <p>
                    <b>Joined at:</b> {contentInfo.joinedAt}
                  </p>
                </StyledInfoColumn>
                <StyledInfoColumn
                  item
                  container
                  justify="flex-start"
                  xs={12}
                  sm={6}
                  xl={3}
                >
                  <p>
                    <b>Ftrot ratio:</b> {contentInfo.FTRORTratio * 100}%
                  </p>
                  <p>
                    <b>Unfinished tasks:</b> {contentInfo.unfinishedTasks}
                  </p>
                </StyledInfoColumn>
              </Grid>
            </Grid>
          </StyledUserDetails>
        </Grid>
        <Grid item container xs={8}>
          <StyledUsefulInformations>
            <Grid item container>
              <Grid item xs={12} md={6}>
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
              </Grid>
              <Grid item container xs={12} md={6}>
                <StyledDoughnutContainer>
                  <h3>Work in CW06:</h3>
                  <div>
                    <Doughnut
                      data={{
                        labels: ["Planned", "Unassigned", "Overwork hours"],
                        datasets: [
                          {
                            data: contentInfo.statusOfWorkInCurrentWeek,
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
              </Grid>
            </Grid>
          </StyledUsefulInformations>
        </Grid>
        <Grid item xs={8}>
          <StyledGraphs>
            <AppBar position="static">
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                aria-label="simple tabs example"
              >
                <Tab label="Rework hours" />
                <Tab label="Stopped tasks" />
                <Tab label="Other" />
              </Tabs>
            </AppBar>
            <TabPanel value={selectedTab} index={0}>
              <Line
                data={{
                  ...graphData,
                  datasets: [
                    {
                      ...graphData.datasets[0],
                      data: reworkHours,
                    },
                  ],
                }}
                width={100}
                height={50}
                options={{ maintainAspectRatio: false }}
              />
            </TabPanel>
          </StyledGraphs>
          {/* </section> */}
        </Grid>
      </Grid>
    </StyledBackground>
  );
};

export default EngineerBoard;
