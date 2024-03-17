import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Headline } from "../../shared/styled-components.sc";
import Thorm from "../../../assets/deadThree/ketheric.png";
import Bane from "../../../assets/deadThree/bane.png";
import ChosenOne from "./ChosenOne";
import Orin from "../../../assets/deadThree/orin.png";
import Bhal from "../../../assets/deadThree/bhal.png";
import Gorstash from "../../../assets/deadThree/gortash.png";
import Myrkul from "../../../assets/deadThree/myrkul.png";

const deadThree = [
  {
    image: Thorm,
    god: Myrkul,
    description: `Ketheric Thorm is a key character in Baldur's Gate 3, 
          renowned for his unmatched wisdom and powerful magic. 
          A master of arcane arts and a strategic thinker, he navigates the game's challenges with
          intelligence and a deep ethical compass. Despite his emotional
          detachment, Ketheric is compassionate towards the innocent, making his
          decisions complex and impactful. His presence adds depth and intrigue
          to the BG3 storyline.`,
    godDescription: `Myrkul, also known as the Lord of Bones, is the God of Death and a member of the Dead Three. He is associated with the domain of Death. Myrkul cannot be the deity of a player Cleric.`,
  },
  {
    image: Orin,
    god: Bhal,
    description: `Orin is cruel and sadistic, but artistic and creative in her own twisted way. 
    Her demeanour is immature and almost childish; Orin easily loses her composure when things do not go her way, 
    enacts small rebellions against the authority figures in her life, and enjoys, in a arguably playful way, toying with her victims.
    She derives sadistic pleasure from taunting her victims with the gory details of her deeds.`,
    godDescription: `Bhaal is the God of Murder, a member of the Dead Three and the progenitor of all Bhaalspawn who are his children. He is associated with the domain of Death. Bhaal cannot be the deity of a player Cleric.`,
  },
  {
    image: Gorstash,
    god: Bane,
    description: `Lord Enver Gortash, often just referred to as Gortash, is one of the Chosen of the Absolute, the enigmatic cult taking over the Sword Coast.

Despite his humble beginnings, Gortash quickly rose through the ranks of society in Baldur's Gate with great cunning. Now, an influential figure and poised to become the Archduke of the city, he seeks to consolidate his power and become the ruler of the city and beyond, through whatever means are necessary.`,
    godDescription: `Bane, also known as the Lord of Darkness, is the God of Tyranny, Hate, Strife and a member of the Dead Three. He is associated with the domains of Order and War. Bane cannot be the deity of a player Cleric.`,
  },
];

function DeadThree() {
  return (
    <StyledBox>
      <Headline>The Dead Three</Headline>
      <Container>
        {deadThree.map(({ god, description, image, godDescription }) => (
          <ChosenOne
            key={description}
            god={god}
            description={description}
            image={image}
            godDescription={godDescription}
          />
        ))}
      </Container>
    </StyledBox>
  );
}
export default DeadThree;

const StyledBox = styled(Box)`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;
