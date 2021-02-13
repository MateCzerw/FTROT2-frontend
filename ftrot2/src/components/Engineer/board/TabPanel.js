import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
`;

const TabPanel = ({ value, index, children }) => {
  return <StyledContainer>{value === index && children}</StyledContainer>;
};

export default TabPanel;
