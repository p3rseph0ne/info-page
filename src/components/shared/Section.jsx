import { Box } from "@mui/material";
import styled from "styled-components";
import Divider from "./Divider";

function Section({ children, background, height, divider = true }) {
  return (
    <Container $height={height} $background={background}>
      {children}
      {divider && <Divider />}
    </Container>
  );
}

export default Section;

const Container = styled(Box)`
  min-height: ${({ $height }) => ($height ? $height : "100vh")};
  background-image: ${({ $background }) => `url(${$background})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
