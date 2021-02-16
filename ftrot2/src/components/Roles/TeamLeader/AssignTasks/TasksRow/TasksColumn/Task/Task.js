import React from "react";
import styled from "styled-components";

const StyledTask = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => (props.isDragging ? "#263B4A" : "tomato")};
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Task = ({ provided, snapshot, content, duration }) => {
  return (
    <StyledTask
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={snapshot.isDragging}
      style={{
        ...provided.draggableProps.style,
      }}
    >
      <p>{content}</p>
      <p>{duration}</p>
    </StyledTask>
  );
};

export default Task;
