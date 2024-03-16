import { Box, Typography } from "@mui/material";
import styled from "styled-components";

function Textblock({ background, title, text }) {
  return (
    <Container $background={background}>
      <Headline variant="h2" align="center">
        {title}
      </Headline>
      <Typography variant="subtitle2" align="center" paragraph>
        {text}
      </Typography>
    </Container>
  );
}

export default Textblock;

const Headline = styled(Typography)`
  font-size: 2.5rem !important;
`;

const Container = styled(Box)`
  width: 100%;
  padding: 1rem 0;
  background-image: ${({ $background }) => `url(${$background})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
