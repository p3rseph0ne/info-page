import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import styled, { css } from "styled-components";
import { Box, useMediaQuery } from "@mui/material";
import { Headline } from "../shared/styled-components.sc";
import FAQ from "../../data/faq";

function FAQAccordion() {
  /* Split FAQ in half and seperate left and right side so we can divide the data in two columns later*/
  const half = Math.ceil(FAQ.length / 2);
  const firstColumnItems = FAQ.slice(0, half);
  const secondColumnItems = FAQ.slice(half);
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  /* Renders Accordions is its own const because we need to do it two times, once for the left and once for the right side so we can simply reuse the same code
  and dont have to have it twice in the return () */
  const renderAccordions = (items) =>
    /* Iterate over every item in the given list */
    items.map(({ question, answer }, index) => (
      <StyledAccordion key={index}>
        {/* AccordionSummary equals the text that shows whether or not the the accordion is expanded */}
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />} // set ExpandIcon so it fits the overall design better
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
        >
          <Typography variant="body2">{question}</Typography>
        </StyledAccordionSummary>
        {/* AccordionDetails equals the text that is hidden inside the accordion entries */}
        <StyledAccordionDetails>
          <Typography variant="body2">{answer}</Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
    ));

  return (
    <OuterContainer>
      <Headline>FAQ</Headline>
      <StyledBox>
        <Container>
          {matches ? (
            <>
              <Column>{renderAccordions(firstColumnItems)}</Column>
              <Column>{renderAccordions(secondColumnItems)}</Column>
            </>
          ) : (
            <Column>{renderAccordions(FAQ)}</Column>
          )}
        </Container>
      </StyledBox>
    </OuterContainer>
  );
}

export default FAQAccordion;

/**
 * Styled Components :)
 */

const OuterContainer = styled(Box)`
  height: 100%;
  margin: 2rem;
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 80%;
`;

const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:nth-child(odd) {
    margin-right: 5px;
  }

  &:nth-child(even) {
    margin-left: 5px;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.up("xs")} {
      width: 100%;
    }

    ${theme.breakpoints.up("lg")} {
      width: 50%;
    }
  `}
`;

const StyledAccordion = styled(Accordion)`
  background: transparent !important;
  width: 100%;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: rgba(0, 0, 0, 0.4) !important;
  text-transform: uppercase !important;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: rgba(0, 0, 0, 0.4) !important;
`;
