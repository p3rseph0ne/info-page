import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Headline } from "./styled-components.sc";

const NPCs = [
  {
    name: "Halsin",
    description:
      "The Emerald Grove's Archdruid, central to the main storyline.",
  },
  {
    name: "Kagha",
    description: "A Druid with significant influence over the Druid Grove.",
  },
  {
    name: "Zevlor",
    description: "A tiefling leader seeking safety for his people.",
  },
  {
    name: "Minthara",
    description:
      "A Drow member of the Absolute, pivotal to certain story arcs.",
  },
  {
    name: "Volo",
    description: "Volothamp Geddarm, a charming author and explorer.",
  },
  {
    name: "Raphael",
    description: "A Cambion offering tempting deals with moral implications.",
  },
  {
    name: "Nere",
    description:
      "Associated with the Shadow Druids and their secretive agendas.",
  },
  {
    name: "Gut",
    description: "A Goblin leader with significant influence.",
  },
  {
    name: "Ethel",
    description: "An old hag with dark secrets and powerful witchcraft.",
  },
  {
    name: "Auntie Ethel",
    description: "A deceptive witch presenting dangerous quests.",
  },
  {
    name: "Aran Linvail",
    description: "A figure of intrigue within the city's underworld.",
  },
  {
    name: "Baelen",
    description: "A dwarf involved in quests within the Underdark.",
  },
  {
    name: "Harpel",
    description: "Tied to subplots that weave through the main narrative.",
  },
  {
    name: "Taman",
    description: "Reflects the struggles of common folk amidst turmoil.",
  },
  {
    name: "Sazza",
    description: "Influences player interactions within the goblin camp.",
  },
  {
    name: "Bernard",
    description: "Reveals urban life challenges in Baldur's Gate.",
  },
  {
    name: "Priestess Gut",
    description: "High-ranking goblin priestess serving the Absolute.",
  },
  {
    name: "Glut",
    description: "Associated with darker goblin rituals.",
  },
  {
    name: "Silvanus",
    description: "Whose followers and forces impact quests centered on nature.",
  },
  {
    name: "Mirri",
    description: "An adventurer offering quests that test morality.",
  },
  {
    name: "Brem",
    description: "A haunted former soldier exploring themes of redemption.",
  },
  {
    name: "Derryth",
    description: "A merchant dealing in mysterious magical artifacts.",
  },
  {
    name: "Holvik",
    description:
      "A renowned dwarven blacksmith with quests for rare materials.",
  },
  {
    name: "Jorrix",
    description: "A dragonborn scholar with deep lore knowledge.",
  },
  {
    name: "Fank",
    description: "A thief offering stealth quests and underworld insights.",
  },
  {
    name: "Lorroakan",
    description: "An elven ranger protecting natural realms.",
  },
  {
    name: "Mizora",
    description: "A sorceress delving into arcane mysteries.",
  },
  {
    name: "Gekh Coal",
    description: "Possesses knowledge of necromancy and dark magics.",
  },
  {
    name: "Yorven",
    description: "A halfling involved in humorous and unexpected adventures.",
  },
  {
    name: "Vessa",
    description: "A cleric whose faith is challenged by unfolding events.",
  },
  {
    name: "Thula",
    description:
      "A barbarian leader testing the player's strength and leadership.",
  },
  {
    name: "Eldon",
    description: "An enigmatic figure with shrouded motives.",
  },
];

function NPCList() {
  return (
    <Box>
      <Headline>Notable NPCs</Headline>
      <StyledBox>
        {NPCs.map((npc) => {
          return (
            <CharacterDescription key={npc.name}>
              {npc.name}: {npc.description}
            </CharacterDescription>
          );
        })}
      </StyledBox>
    </Box>
  );
}
export default NPCList;

const StyledBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CharacterDescription = styled(Typography)`
  margin: 1rem 0 !important;
  text-align: left !important;
`;
