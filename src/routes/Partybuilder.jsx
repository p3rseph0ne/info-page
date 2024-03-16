import "../styling/Landingpage.css";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

let tav = true;

function toggleteav(button) {
  if (button == "tav") {
    tav = true;
  } else {
    tav = false;
  }
}

function Partybuilder() {
  return (
    <Box>
      <Button variant="contained">TAV</Button>
      <Button variant="contained">Origin</Button>
    </Box>
  );
}

export default Partybuilder;
