import React from "react";
import OriginCharacters from "../components/landingPage/originCharacters/OriginCharacters";
import FAQAccordion from "../components/landingPage/FAQAccordion";
import DeadThree from "../components/landingPage/deadThree/DeadThree";
import Characters from "../assets/characters.png";
import Section from "../components/shared/Section";
import Hell from "../assets/hell.png";
import Grove from "../assets/grove.png";
import Ruins from "../assets/ruins.png";
import Stage from "../components/shared/Stage";
import CompanionCompare from "../components/landingPage/compare/CompanionCompare";

/*Text that will be given to the Stage component to be displayed */
const text = `
As you step through the gates of our digital realm, you find yourself at the threshold of a world brimming with enchantment, peril, and the promise of untold stories. This is where heroes are forged in the crucible of conflict, where alliances are formed in the shadows of ancient ruins, and where every choice can tip the scales of fate.
In the sprawling universe of Baldur's Gate 3, every path you choose leads to a new mystery, every decision shapes the world around you, and every companion by your side has a story that could change the course of your journey. From the darkest dungeons to the most resplendent castles, the lands of Faerûn hold secrets waiting to be unveiled by the brave or cunning.
Here, within the pages of our site, you will find everything you need to navigate the complexities of this magnificent world. Dive into comprehensive guides that will prepare you for the challenges ahead, explore lore that spans centuries to bring depth to your adventures, and connect with a community of fellow adventurers eager to share their tales and triumphs.
Whether you're a seasoned explorer of the Forgotten Realms or setting foot in this universe for the first time, our portal offers you a map to the treasures within. Gather your party, sharpen your blades, and let your magic guide you. The gates of Baldur's Gate 3 are open, and the adventure of a lifetime awaits.
`;

/**
 * Landingpage is the Websites "root" Page and contains several components
 * For further information please check the component-files
 */
function LandingPage() {
  return (
    <div>
      <Stage headline={"Welcome to Faerun and all its magic"} text={text} />
      <Section id="origin" background={Characters}>
        <OriginCharacters />
      </Section>
      <Section id="compare" background={Ruins}>
        <CompanionCompare />
      </Section>
      <Section id="faq" background={Grove} height="50vh">
        <FAQAccordion />
      </Section>
      <Section id="npcs" background={Hell} divider={false}>
        <DeadThree />
      </Section>
    </div>
  );
}

export default LandingPage;
