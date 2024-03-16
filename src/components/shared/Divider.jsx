import { Box } from "@mui/material";
import styled from "styled-components";
import DividerLine from "../../assets/divider/divider-line.svg";
import DividerLeft from "../../assets/divider/divider-left.svg";
import DividerRight from "../../assets/divider/divider-right.svg";

function Divider() {
  return <StyledBox component={"span"} />;
}

const StyledBox = styled(Box)`
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 30px; // Adjust width as necessary
    height: 7px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  &:before {
    right: 100%;
    background-image: url(${DividerLeft});
  }

  &:after {
    left: 100%;
    background-image: url(${DividerRight});
  }

  position: absolute;
  bottom: -3px;
  left: 30px;
  width: calc(100% - 200px);
  height: 7px;
  background-image: url(${DividerLine});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform: translate(-50%, 0);
  left: 50%;
  z-index: 9999;
`;

export default Divider;
