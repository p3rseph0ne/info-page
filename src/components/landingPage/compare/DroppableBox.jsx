import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styled, { css } from "styled-components";
import { Box } from "@mui/material";

/**
 * Renders the box that can recieve a DraggableCharacter
 * In order for the useDroppable hook to function properly, it needs the setNodeRef property to be attached to the HTML element you intend on turning into a droppable area
 * @param {*} props
 * @returns
 */
export function DroppableBox(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return <StyledBox ref={setNodeRef}>{props.children}</StyledBox>;
}

/**
 * Styled Compnent :)
 */
const StyledBox = styled(Box)`
  border: 1px solid #fbcea0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem;

  ${({ theme }) => css`
    ${theme.breakpoints.up("xs")} {
      min-height: 150px;
      min-width: 150px;
    }

    ${theme.breakpoints.up("md")} {
      min-height: 200px;
      min-width: 200px;
    }
  `}
`;
