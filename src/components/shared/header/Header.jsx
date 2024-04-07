import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

/*List of pages to be used in the header nav, the first entry will be expandable/collapsable
therefor the list features the children label and paths for the collapsed menu entry */
export const pages = [
  {
    label: "What's what in Baldurs Gate 3?",
    children: [
      {
        label: "Intro",
        path: "/#intro",
      },
      {
        label: "Companions",
        path: "/#origin",
      },
      {
        label: "Compare",
        path: "/#compare",
      },
      {
        label: "FAQ",
        path: "/#faq",
      },
      {
        label: "The Dead Three",
        path: "/#npcs",
      },
    ],
  },
  {
    label: "How to build a balanced party",
    path: "/partybuilder",
  },
  {
    label: "Ready for Faerun?",
    path: "/quiz",
  },
];

/**
 * Renders header navbar with the given menu-entries
 * @returns
 */
function Header() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    /* sticky ensures that the Appbar stays on the top of the screen even when the user scrolls */
    <StyledAppBar position="sticky">
      <StyledContainer maxWidth="xl">
        {matches ? <DesktopMenu /> : <MobileMenu />}
      </StyledContainer>
    </StyledAppBar>
  );
}
export default Header;

/**
 * Styled components :)
 */

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  height: 0px;
`;

const StyledContainer = styled(Container)`
  background-color: transparent;
`;
