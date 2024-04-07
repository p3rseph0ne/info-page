import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/logo.webp";
import { StyledLogo } from "../styled-components.sc";
import { pages } from "./Header";
import { HashLink } from "react-router-hash-link";

export const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  /* Ensure that after routing to a different site, the user will always start at the (0,0) Coordinates of the Component */
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <MobileMenuContainer>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <BurgerIcon />
      </IconButton>
      <Link to="/">
        {/*Logo with a Link that redirects to the Landingpage*/}
        <StyledLogo src={Logo} alt="Baldurs Gate 3" />{" "}
      </Link>
      <StyledDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerContainer>
          <List>
            {pages.map((page) => {
              return (
                <StyledListItem key={page.label}>
                  <StyledHashLink to={page.path}>{page.label}</StyledHashLink>
                </StyledListItem>
              );
            })}
          </List>
        </DrawerContainer>
      </StyledDrawer>
    </MobileMenuContainer>
  );
};

const MobileMenuContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BurgerIcon = styled(MenuIcon)`
  font-size: 2rem !important;
`;

const DrawerContainer = styled(Box)`
  width: 250px;
`;

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
`;

const StyledListItem = styled(ListItem)`
  margin: 1rem 0;
`;

const StyledHashLink = styled(HashLink)`
  text-decoration: none;

  /* Changes textcolor on hover to give proper user feedback */
  &:hover {
    color: white !important;
  }
`;
