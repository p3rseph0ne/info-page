import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { CharacterImage, Headline } from "../../shared/styled-components.sc";
import { DndContext } from "@dnd-kit/core";
import { DraggableCharacter } from "./DraggableCharacter";
import { DroppableBox } from "./DroppableBox";
import { originCharacterParties } from "../../../data/partyBuilder";

function CompanionCompare() {
  const [parentLeft, setParentLeft] = useState(undefined);
  const [parentRight, setParentRight] = useState(undefined);
  const [leftPick, setLeftPick] = useState(undefined);
  const [rightPick, setRightPick] = useState(undefined);
  const characterList = originCharacterParties;

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
            {parentLeft === "droppableLeft" ? (
              <StatBox>
                <CharacterImage src={leftPick.image} alt={leftPick.name} />
              </StatBox>
            ) : (
              "Drop here"
            )}
            {leftPick && rightPick && (
              <Stats>
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
            {parentRight === "droppableRight" ? (
              <StatBox>
                <CharacterImage src={rightPick.image} alt={rightPick.name} />
              </StatBox>
            ) : (
              "Drop here"
            )}
            {leftPick && rightPick && (
              <Stats>
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
