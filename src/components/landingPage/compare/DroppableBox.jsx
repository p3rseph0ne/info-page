import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styled from "styled-components";
import { Box } from "@mui/material";

export function DroppableBox(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: 1,
  };

  return (
    <StyledBox ref={setNodeRef} style={style}>
      {props.children}
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  border: 1px solid #fbcea0;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
