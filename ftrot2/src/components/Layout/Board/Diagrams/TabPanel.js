import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 10px;
  height: calc(100% - 58px);
`;

const TabPanel = ({ value, index, children }) => {
  return <StyledContainer>{value === index && children}</StyledContainer>;
};

export default TabPanel;
