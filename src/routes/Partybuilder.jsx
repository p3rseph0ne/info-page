import "../styling/Landingpage.css";
import { Box } from "@mui/material";
import Stage from "../components/shared/Stage";

const text = `
In the richly detailed world of Baldur's Gate 3 (BG3), assembling a balanced party is crucial for navigating the myriad challenges and complex narratives that define the game. A balanced party ensures that players can effectively confront a wide range of scenarios, from intricate puzzles and environmental obstacles to diverse combat situations, each demanding a different approach and skill set.
Having a variety of classes and races in your party allows for a broader array of abilities, spells, and tactical advantages. Warriors and tanks absorb damage and protect more vulnerable members, while rogues offer stealth and precision, dismantling traps or striking from the shadows. Wizards and other spellcasters bring powerful arcane attacks and support spells, essential for both offense and defense. Clerics and healers, on the other hand, provide vital sustenance, ensuring the party's longevity in prolonged encounters and dungeons.
A balanced party also enriches the game's narrative experience. BG3 is renowned for its deep storylines and character-driven quests. Diverse party compositions unlock unique dialogue options and quest solutions, reflecting the game's emphasis on choice and consequence. Interactions between characters with different backgrounds and personalities add depth to the story, offering insights and perspectives that might otherwise be missed.
Moreover, the strategic depth of BG3’s combat system rewards thoughtful party composition. Encounters are designed to challenge players, requiring a mix of brute force, magic, and cunning to overcome. A well-rounded party allows players to adapt their tactics to various enemies and terrains, turning potential defeats into victories.
In summary, the importance of a balanced party in Baldur's Gate 3 cannot be overstated. It not only equips players with the tools needed to thrive in both combat and narrative but also greatly enhances the overall gameplay experience, embodying the essence of strategic planning and character development.
`;

const originCharacters = [
  {
    Astarion: [
      {
        Gale: "Provides ranged magical support, crowd control, and area damage, complementing Astarion's single-target focus.",
      },
      {
        Laezel:
          "Her tanking ability allows Astarion to exploit sneak attack opportunities with enemies focused on her.",
      },
      {
        Shadowheart:
          "Offers healing and support spells, and her medium armor can provide an additional frontline.",
      },
    ],
  },
  {
    Karlach: [
      {
        Gale: "Provides powerful offensive spells to control the battlefield, complementing Karlach's melee strength.",
      },
      {
        Shadowheart:
          "Her healing and buffing capabilities support Karlach's frontline engagement.",
      },
      {
        Wyll: "His ranged attack options create opportunities for Karlach to capitalize on distracted or weakened enemies.",
      },
    ],
  },
  {
    Gale: [
      {
        Laezel:
          "Acts as a protective barrier, ensuring Gale has the space and safety to cast spells effectively.",
      },
      {
        Wyll: "The combination of wizard and warlock spells offers a dynamic range of magical attacks and defenses.",
      },
      {
        Astarion:
          "Can eliminate threats that get too close to Gale, providing valuable intelligence for spell strategy.",
      },
    ],
  },
  {
    Laezel: [
      {
        Shadowheart:
          "Provides healing and buffs, ensuring Laezel can stay in the fight longer.",
      },
      {
        Gale: "Offers ranged support, allowing Laezel to focus on engaging enemies up close.",
      },
      {
        Wyll: "Adds a mix of magic and physical combat to the party, providing versatility.",
      },
    ],
  },
  {
    Wyll: [
      {
        Laezel:
          "Provides a solid frontline, protecting Wyll as he casts from a distance.",
      },
      {
        Shadowheart:
          "Her support capabilities ensure Wyll can maximize his spellcasting potential.",
      },
      {
        Astarion:
          "Astarion's stealth and damage output can quickly take down targets weakened by Wyll's magic.",
      },
    ],
  },
  {
    Shadowheart: [
      {
        Gale: "This magical duo with Wyll provides a broad range of offensive and defensive capabilities.",
      },
      {
        Wyll: "Alongside Gale, creates a balanced and resilient party with diverse magical abilities.",
      },
      {
        Laezel:
          "Ensures that the party has a solid frontline, allowing Shadowheart to focus on support from a safer distance.",
      },
    ],
  },
];

function Partybuilder() {
  return (
    <Box>
      <Stage headline={"Why do you need a balanced party?"} text={text} />
    </Box>
  );
}

export default Partybuilder;
