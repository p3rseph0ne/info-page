import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

/* styled component Headline to be used in multiple components */
export const Headline = styled(Typography)`
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.breakpoints.up("xs")} {
      font-size: 1.5rem !important;
      margin-bottom: 1rem !important;
    }

    ${theme.breakpoints.up("md")} {
      font-size: 2.5rem !important;
      margin-bottom: 1rem !important;
    }
  `}
`;

/* styled Component CharacterImage to be used in multiple components */
export const CharacterImage = styled.img`
  width: 150px;
`;

export const StyledLogo = styled.img`
  height: 50px;
  margin-right: 1rem;
  margin-top: 1rem;
`;
