import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.webp";
import MenuBullet from "../../assets/menu-bullet.svg";
import { HashLink } from "react-router-hash-link";

const pages = [
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
        label: "FAQ",
        path: "/#faq",
      },
      {
        label: "Noteworthy NPCs",
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

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="sticky">
      <StyledContainer maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <StyledLogo src={Logo} alt="Baldurs Gate 3" />
          </Link>
          <NavigationContainer>
            {pages.map((page) => (
              <Box key={page.label}>
                <MenuButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
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
      </StyledContainer>
    </StyledAppBar>
  );
}
export default Header;

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  height: 0px;
`;

const NavigationContainer = styled(Box)`
  display: flex;
  flex-grow: 1;
`;

const StyledContainer = styled(Container)`
  background-color: transparent;
`;

const StyledLogo = styled.img`
  height: 50px;
  margin-right: 1rem;
`;

const StyledMenu = styled(Menu)`
  ul {
    background-color: transparent !important;
  }

  .MuiPaper-root {
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  background-color: transparent !important;
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
  &:before {
    content: "";
    display: block;
    width: 6px;
    height: 5px;
    background-image: url(${MenuBullet});
    background-size: contain;
    margin-right: 6px;
  }

  &:hover {
    color: white !important;
  }
`;

const StyledHashLink = styled(HashLink)`
  text-decoration: none;
`;
