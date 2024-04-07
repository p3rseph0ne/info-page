import { Box } from "@mui/material";
import styled, { css } from "styled-components";
import { Headline } from "../../shared/styled-components.sc";
import ChosenOne from "./ChosenOne";
import deadThree from "../../../data/deadThree";

/**
 * Renders The Headline for the deadthree section. Also Provides the Container in which the deadThree ChosenOne Cards will be rendered and iterates over the
 * list with the content for said ChosenOne Cards to provide each card instance with the correct props
 * @returns
 */
function DeadThree() {
  return (
    <StyledBox>
      <Headline>The Dead Three</Headline>
      <Container>
        {/*Iterate over deadThree list*/}
        {deadThree.map(({ god, description, image, godDescription }) => (
          <ChosenOne
            key={description}
            god={god}
            description={description}
            image={image}
            godDescription={godDescription}
          />
        ))}
      </Container>
    </StyledBox>
  );
}
export default DeadThree;

/**
 * Styled Components :)
 */

const StyledBox = styled(Box)`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;

  ${({ theme }) => css`
    ${theme.breakpoints.up("xs")} {
      flex-direction: column;
      align-items: center;
    }

    ${theme.breakpoints.up("lg")} {
      flex-direction: row;
    }
  `}
`;
