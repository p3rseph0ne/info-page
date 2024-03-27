import * as React from "react";
import { useRef } from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Box,
  Typography,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import emailjs from "@emailjs/browser";

/**
 * Modal to render a Form that takes various user Inpute and then send the given results to that user per Mail
 * for further information about the mailing check: https://www.emailjs.com/
 * @param {boolean} open - whether or not the modal is supposed to be open
 * @param {*} handleClose - setOpen(false)
 * @param {int} result - result achieved by user taking the quiz
 * @returns
 */
function MailModal({ open, handleClose, result }) {
  const form = useRef();

  /**
   * Function to be called on submit of the given form
   * uses MailJS to send an E-Mail with the given parameters to the given MailAdress
   * @param {*} e - Event
   */
  const sendEmail = (e) => {
    e.preventDefault();

    /* usually you'd put those values in a seperate file and exclude that from your git repo to ensure no one can steal your key but im lazy rn */
    emailjs
      .send(
        "service_zaz5u2f",
        "template_die7kzf",
        {
          message: result.score,
          to_name: "Sepp",
          send_to: "robin.braumann@gmail.com",
        },
        {
          publicKey: "Jd1P7-Qtx8DbReaRr",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentContainer>
        <Typography variant="h5">Gladly! Please fill out the Form:</Typography>
        <Form ref={form} onSubmit={sendEmail}>
          <FormControl fullWidth>
            <InputLabel id="Gender">Gender</InputLabel>
            <Select labelId="Gender" id="Gender" label="Gender">
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Non-Binary</MenuItem>
              <MenuItem value={4}>I'd rather not say</MenuItem>
            </Select>
          </FormControl>
          <TextField id="Name" defaultValue="Name" variant="standard" />
          <TextField
            type="email"
            id="email"
            defaultValue="Mail"
            variant="standard"
          />
          <FormControl fullWidth>
            <FormLabel id="Media">How did you find us?</FormLabel>
            <RadioGroup
              aria-labelledby="Media"
              defaultValue="Larian Forum"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Larian Forum"
                control={<Radio />}
                label="Larian Forum"
              />
              <FormControlLabel
                value="Reddit"
                control={<Radio />}
                label="Reddit"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <FormGroup>
            Keep me updated about:
            <FormControlLabel
              control={<Checkbox name="BG3 News" />}
              label="BG3 News"
            />
            <FormControlLabel
              control={<Checkbox name="The current weather in Faerun" />}
              label="The current weather in Faerun"
            />
            <FormControlLabel
              control={<Checkbox name="Our personal problems" />}
              label="Our personal problems"
            />
          </FormGroup>
          <FormControlLabel
            required
            control={<Switch />}
            label="Yes you're allowed to send me Mails"
          />
          <FormControl fullWidth>
            <ModalButton type="submit" variant="outlined">
              Submit
            </ModalButton>
          </FormControl>
        </Form>
      </ModalContentContainer>
    </StyledModal>
  );
}

export default MailModal;

/**
 * Styled components :)
 */

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
`;

const ModalContentContainer = styled(Box)`
  min-width: 50vw;
  background-color: #ffffff;
  padding: 2rem;
`;

const ModalButton = styled(Button)`
  border-color: #fbcea0 !important;
`;

const Form = styled.form`
  & > * {
    margin: 1rem 0;
  }
`;
