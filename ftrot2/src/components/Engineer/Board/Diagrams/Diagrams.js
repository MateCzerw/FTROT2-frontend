import React, { useState } from "react";
import styled from "styled-components";
import TabPanel from "./TabPanel";
import { Line } from "react-chartjs-2";
import { AppBar, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import { useSelector } from "react-redux";

const StyledPaper = styled(Paper)`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 40vh;
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

const Diagrams = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const reworkHours = useSelector((state) => state.engineer.reworkHours);
  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <StyledPaper>
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
    </StyledPaper>
  );
};

export default Diagrams;
