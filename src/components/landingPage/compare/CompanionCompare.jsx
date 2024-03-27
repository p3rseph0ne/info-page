import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { CharacterImage, Headline } from "../../shared/styled-components.sc";
import { DndContext } from "@dnd-kit/core";
import { DraggableCharacter } from "./DraggableCharacter";
import { DroppableBox } from "./DroppableBox";
import { originCharacterParties } from "../../../data/partyBuilder";

/**
 * Renders
 * for further information regarding the drag and drop library used see: https://dndkit.com/
 * @returns
 */
function CompanionCompare() {
  /* keeps track of the container Id*/
  const [parentLeft, setParentLeft] = useState(undefined);
  /* keeps track of the container Id*/
  const [parentRight, setParentRight] = useState(undefined);
  /* keeps track of the character in the left droppable */
  const [leftPick, setLeftPick] = useState(undefined);
  /* keeps track of the character in the right droppable */
  const [rightPick, setRightPick] = useState(undefined);
  /* list of characters that are available */
  const characterList = originCharacterParties;

  /**
   * When a Droppable is dropped in a draggable, the containerId is stored to set ParentLeft or ParentRight to keep track of which container already has a draggable
   * SetLeftPick/SetRightPick state is updated with the value of the character from the characterlist at the current characterIndex that caused the event
   */
  function handleDragEnd(event) {
    const containerId = event.over.id;
    const direction = containerId.replace("droppable", "");
    const characterIndex = event.active.id.replace("draggable_", "");
    if (direction.toLowerCase() === "left") {
      setLeftPick(characterList[characterIndex]);
      setParentLeft(containerId);
    } else {
      setRightPick(characterList[characterIndex]);
      setParentRight(containerId);
    }
  }

  return (
    <StyledBox>
      <Headline>Compare companions starting Stats</Headline>
      <DndContext onDragEnd={(event) => handleDragEnd(event)}>
        <CompanionBox>
          {/* iterate over the characterlist and create a draggablecharacter each */}
          {characterList.map((character, index) => {
            return (
              <DraggableCharacter
                key={`draggable_${character.name}`}
                id={`draggable_${index}`}
                character={character}
              />
            );
          })}
        </CompanionBox>
        <TwoColumnContainer>
          <DroppableBox id="droppableLeft">
            {/* show the characterImage of the dropped draggablecharacter in the left container IF parent left is set to a character value 
            otherwise show "Drop here" text*/}
            {parentLeft === "droppableLeft" ? (
              <StatBox>
                <CharacterImage src={leftPick.image} alt={leftPick.name} />
              </StatBox>
            ) : (
              "Drop here"
            )}
            {/* if there is a DraggableCharacter in the left AND right DroppableBox, display the stats of the character in the left box */}
            {leftPick && rightPick && (
              <Stats>
                {/* iterate over the key values of the current left pick*/}
                {Object.keys(leftPick.startingStats).map((key) => {
                  return (
                    <Typography key={`left${key}`}>
                      {key}: {leftPick.startingStats[key]}
                    </Typography>
                  );
                })}
              </Stats>
            )}
          </DroppableBox>
          <DroppableBox id="droppableRight">
            {/* show the characterImage of the dropped draggablecharacter in the right container IF parent left is set to a character value 
            otherwise show "Drop here" text*/}
            {parentRight === "droppableRight" ? (
              <StatBox>
                <CharacterImage src={rightPick.image} alt={rightPick.name} />
              </StatBox>
            ) : (
              "Drop here"
            )}
            {/* if there is a DraggableCharacter in the left AND right DroppableBox, display the stats of the character in the left box */}
            {leftPick && rightPick && (
              <Stats>
                {/* iterate over the key values of the current left pick*/}
                {Object.keys(rightPick.startingStats).map((key) => {
                  return (
                    <Typography key={`right_${key}`}>
                      {key}: {rightPick.startingStats[key]}
                    </Typography>
                  );
                })}
              </Stats>
            )}
          </DroppableBox>
        </TwoColumnContainer>
      </DndContext>
    </StyledBox>
  );
}

export default CompanionCompare;

/**
 * Styled components :)
 */

const StyledBox = styled(Box)`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanionBox = styled(Box)`
  margin: 2rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
`;

const TwoColumnContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  width: 50%;
  justify-content: space-between;
`;

const StatBox = styled(Box)`
  width: 100%;
`;

const Stats = styled(Box)`
  position: absolute;
  top: 225px;
`;
