import React from "react";
import "../styling/Landingpage.css";
import OriginCharacters from "../components/originCharacters/OriginCharacters";
import FAQAccordion from "../components/FAQAccordion";
import NPCList from "../components/NPCList";
import Stage from "../assets/stage.png";
import Characters from "../assets/characters.png";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Section from "../components/shared/Section";
import { Headline } from "../components/styled-components.sc";
import FAQ from "../assets/faq.png";
import Grove from "../assets/grove.png";

const text = `
As you step through the gates of our digital realm, you find yourself at the threshold of a world brimming with enchantment, peril, and the promise of untold stories. This is where heroes are forged in the crucible of conflict, where alliances are formed in the shadows of ancient ruins, and where every choice can tip the scales of fate.

In the sprawling universe of Baldur's Gate 3, every path you choose leads to a new mystery, every decision shapes the world around you, and every companion by your side has a story that could change the course of your journey. From the darkest dungeons to the most resplendent castles, the lands of Faerûn hold secrets waiting to be unveiled by the brave or cunning.

Here, within the pages of our site, you will find everything you need to navigate the complexities of this magnificent world. Dive into comprehensive guides that will prepare you for the challenges ahead, explore lore that spans centuries to bring depth to your adventures, and connect with a community of fellow adventurers eager to share their tales and triumphs.

Whether you're a seasoned explorer of the Forgotten Realms or setting foot in this universe for the first time, our portal offers you a map to the treasures within. Gather your party, sharpen your blades, and let your magic guide you. The gates of Baldur's Gate 3 are open, and the adventure of a lifetime awaits.
`;

function Landingpage() {
  return (
    <div>
      <Section background={Stage}>
        <Headline>WELCOME TO FAERUN AND ALL ITS MAGIC</Headline>
        <Paragraph>{text}</Paragraph>
      </Section>
      <Section background={Characters}>
        <OriginCharacters />
      </Section>
      <Section background={FAQ} height="50vh">
        <FAQAccordion />
      </Section>
      <Section background={Grove} divider={false}>
        <NPCList />
      </Section>
    </div>
  );
}

export default Landingpage;

const Paragraph = styled(Typography)`
  width: 80%;
`;