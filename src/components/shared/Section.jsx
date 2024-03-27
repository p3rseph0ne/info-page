import { Box } from "@mui/material";
import styled from "styled-components";
import Divider from "./Divider";

/**
 * Basically renders background, height and divider for the children component
 * @param {*} id
 * @param {React component} children - Will be displayed inside the section
 * @param {String} background - Path String to the given background for the section
 * @param {String} height - Height value in viewports, if not provided height will be set to 100vh per default
 * @param {boolean} divider - whether or not the divider should be rendered
 * @returns
 */
function Section({ id, children, background, height, divider = true }) {
  return (
    <Container id={id} $height={height} $background={background}>
      {children}
      {divider && <Divider />}
    </Container>
  );
}

export default Section;

/*Styling for the Box above ensuring that it spans over one whole website view (if not stated otherwise via props), sets the background and centers the content */
const Container = styled(Box)`
  min-height: ${({ $height }) => ($height ? $height : "100vh")};
  background-image: ${({ $background }) => `url(${$background})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
