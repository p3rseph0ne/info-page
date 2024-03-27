import { Headline } from "./styled-components.sc";
import StageBG from "../../assets/stage.png";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Section from "./Section";

/**
 * A Component that only provides a background Image, headline and textparagraph
 * @param {String} headline - Headline for the Stage
 * @param {String} text - Text for the textparagraph
 * @returns
 */
function Stage({ headline, text }) {
  return (
    <Section id="intro" background={StageBG}>
      <Headline>{headline}</Headline>
      <Paragraph>{text}</Paragraph>
    </Section>
  );
}

export default Stage;

/* Styled component for the paragraph, ensurig that it doesnt span over the whole width */
const Paragraph = styled(Typography)`
  max-width: 75%;
`;
