import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button, Tooltip } from "@mui/material";
import styled from "styled-components";
import { CharacterImage } from "../../shared/styled-components.sc";

export function DraggableCharacter({ id, character, onClick }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Tooltip
      key={character.name}
      title={`${character.name} (${character.class})`}
    >
      <Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <CharacterImage src={character.image} alt={character.name} />
      </Button>
    </Tooltip>
  );
}
