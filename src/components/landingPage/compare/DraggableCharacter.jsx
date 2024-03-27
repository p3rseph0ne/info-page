import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button, Tooltip } from "@mui/material";
import { CharacterImage } from "../../shared/styled-components.sc";

/**
 * Renders the DraggableCharacters that can be dropped in a DroppableBox
 * @param {int} id
 * @param {object} character - character object that stores the relevant values to render the image button
 * @returns
 */
export function DraggableCharacter({ id, character }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = {
    // makes the element draggable by passing the transform property via CSS
    //Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    /*  display class and name on hover of the character image */
    <Tooltip
      key={character.name}
      title={`${character.name} (${character.class})`}
    >
      {/* renders the button with the given character 
      In order for the useDraggable hook to function properly, it needs the setNodeRef property 
      to be attached to the HTML element you intend on turning into a draggable element so that @dnd-kit can measure that element to compute collisions */}
      <Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <CharacterImage src={character.image} alt={character.name} />
      </Button>
    </Tooltip>
  );
}
