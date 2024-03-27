import { Typography } from "@mui/material";
import styled from "styled-components";

/* styled component Headline to be used in multiple components */
export const Headline = styled(Typography)`
  font-size: 2.5rem !important;
  margin-bottom: 1rem !important;
  text-transform: uppercase;
`;

/* styled Component CharacterImage to be used in multiple components */
export const CharacterImage = styled.img`
  width: 150px;
`;
