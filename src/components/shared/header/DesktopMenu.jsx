import React, { useEffect } from "react";
import { Box, Toolbar, Menu, Button, MenuItem } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/logo.webp";
import MenuBullet from "../../../assets/menu-bullet.svg";
import { HashLink } from "react-router-hash-link";
import { pages } from "./Header";
import { StyledLogo } from "../styled-components.sc";

export const DesktopMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  /*useLocation returns the current location object, in our case the pathname is needed for the following useEffectHook
  https://reactrouter.com/en/main/hooks/use-location*/
  const { pathname } = useLocation();

  /* Ensure that after routing to a different site, the user will always start at the (0,0) Coordinates of the Component */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /*Sets the acnhorEl state to the selected target to expand the menu entry */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  /*Sets the acnhorEl state null to collapse the menu entry */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar disableGutters>
      <Link to="/">
        {/*Logo with a Link that redirects to the Landingpage*/}
        <StyledLogo src={Logo} alt="Baldurs Gate 3" />{" "}
      </Link>
      <NavigationContainer>
        {/*Iterate over every page in the list above and render a menu button each*/}
        {pages.map((page) => (
          <Box key={page.label}>
            <MenuButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              /* Check if Menubutton (page-entry) has children 
                    if the page has children handleclick method is called to expand the menu
                    if the page doesnt have children useNavigate is used to route the User to the desired destination 
                    https://reactrouter.com/en/main/hooks/use-navigate*/
              onClick={(e) => {
                if (page.children) {
                  handleClick(e);
                } else if (page.path) {
                  navigate(page.path);
                }
              }}
              sx={{
                color: "white",
              }}
            >
              {page.label}
            </MenuButton>
            {/* If List entry has children, renders StyleMenu Box  */}
            {page.children && (
              <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {/* Iterate over list of children of the given List entry and render a StyledHashLink each */}
                {page.children.map((child) => (
                  <StyledMenuItem key={child.label}>
                    <StyledHashLink onClick={handleClose} to={child.path}>
                      {child.label}
                    </StyledHashLink>
                  </StyledMenuItem>
                ))}
              </StyledMenu>
            )}
          </Box>
        ))}
      </NavigationContainer>
    </Toolbar>
  );
};

const StyledMenu = styled(Menu)`
  ul {
    background-color: transparent !important;
  }

  /* Overwrite MuiPaper-root styling values to also make the background of the expanded Menu entry transparent */
  .MuiPaper-root {
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  background-color: transparent !important;
  /*renders menubullet icon to appear on the left side of the entry */
  &:before {
    content: "";
    display: block;
    width: 6px;
    height: 5px;
    background-image: url(${MenuBullet});
    background-size: contain;
    margin-right: 6px;
  }
`;

const MenuButton = styled(Button)`
  /*renders menubullet icon to appear on the left side of the entry */
  &:before {
    content: "";
    display: block;
    width: 6px;
    height: 5px;
    background-image: url(${MenuBullet});
    background-size: contain;
    margin-right: 6px;
  }

  /* Changes textcolor on hover to give proper user feedback */
  &:hover {
    color: white !important;
  }
`;

/* Styles Hashlinks so that they are no longer underlined 
(this affects menu children entries in our case) */
const StyledHashLink = styled(HashLink)`
  text-decoration: none;

  /* Changes textcolor on hover to give proper user feedback */
  &:hover {
    color: white !important;
  }
`;

const NavigationContainer = styled(Box)`
  display: flex;
  flex-grow: 1;
`;
