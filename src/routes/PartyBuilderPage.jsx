import { Box } from "@mui/material";
import Stage from "../components/shared/Stage";
import Hell from "../assets/hell.png";
import Section from "../components/shared/Section";
import Builder from "../components/partyBuilder/Builder";

/*Text that will be given to the Stage component to be displayed */
const text = `
In Baldur's Gate 3 (BG3), creating a balanced party is key for mastering its diverse challenges and engaging with its complex storylines. A mix of classes and races provides a wide range of abilities for tackling puzzles, environmental challenges, and combat situations. This diversity enables tactical advantages, with warriors and tanks absorbing damage, rogues handling stealth tasks, spellcasters delivering powerful attacks, and healers ensuring the party's survival. Additionally, a varied party composition offers unique dialogue options and quest solutions, enriching the narrative and allowing deeper character interactions. The strategic combat system of BG3 further underscores the value of a well-rounded party, enabling flexible tactics against different enemies and scenarios. Ultimately, a balanced party is essential for a full BG3 experience, highlighting the game's strategic and narrative depth.`;

/**
 * Renders the Stage Component for the Partybuilder site with the given text and headline. Also Renders Section and Builder Component for Partybuilder site
 */
function PartyBuilderPage() {
  return (
    <Box>
      <Stage headline={"Why do you need a balanced party?"} text={text} />
      <Section background={Hell}>
        <Builder />
      </Section>
    </Box>
  );
}

export default PartyBuilderPage;
