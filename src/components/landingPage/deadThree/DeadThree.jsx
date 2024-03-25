import { Box } from "@mui/material";
import styled from "styled-components";
import { Headline } from "../../shared/styled-components.sc";
import ChosenOne from "./ChosenOne";
import deadThree from "../../../data/deadThree";

function DeadThree() {
  return (
    <StyledBox>
      <Headline>The Dead Three</Headline>
      <Container>
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
`;
