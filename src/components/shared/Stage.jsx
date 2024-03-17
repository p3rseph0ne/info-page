import { Headline } from "./styled-components.sc";
import StageBG from "../../assets/stage.png";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Section from "./Section";

function Stage({ headline, text }) {
  return (
    <Section id="intro" background={StageBG}>
      <Headline>{headline}</Headline>
      <Paragraph>{text}</Paragraph>
    </Section>
  );
}

export default Stage;

const Paragraph = styled(Typography)`
  max-width: 75%;
`;
