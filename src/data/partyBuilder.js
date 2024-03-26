import Karlach from "../assets/characters/karlach.png";
import Shadowheart from "../assets/characters/shadowheart.png";
import Astarion from "../assets/characters/astarion.png";
import Gale from "../assets/characters/gale.png";
import Laezel from "../assets/characters/laezel.png";
import Wyll from "../assets/characters/wyll.png";

export const originCharacterParties = [
  {
    name: "Astarion",
    class: "Rogue",
    image: Astarion,
    startingStats: {
      Strength: 9,
      Dexterity: 17,
      Constitution: 14,
      Intelligence: 13,
      Wisdom: 10,
      Charisma: 14,
    },
    party: [
      {
        name: "Gale",
        description:
          "Provides ranged magical support, crowd control, and area damage, complementing Astarion's single-target focus.",
      },
      {
        name: "Lae'zel",
        description:
          "Her tanking ability allows Astarion to exploit sneak attack opportunities with enemies focused on her.",
      },
      {
        name: "Shadowheart",
        description:
          "Offers healing and support spells, and her medium armor can provide an additional frontline.",
      },
    ],
  },
  {
    name: "Karlach",
    class: "Barbarian",
    image: Karlach,
    startingStats: {
      Strength: 14,
      Dexterity: 14,
      Constitution: 15,
      Intelligence: 8,
      Wisdom: 10,
      Charisma: 12,
    },
    party: [
      {
        name: "Gale",
        description:
          "Provides powerful offensive spells to control the battlefield, complementing Karlach's melee strength.",
      },
      {
        name: "Shadowheart",
        description:
          "Her healing and buffing capabilities support Karlach's frontline engagement.",
      },
      {
        name: "Wyll",
        description:
          "His ranged attack options create opportunities for Karlach to capitalize on distracted or weakened enemies.",
      },
    ],
  },
  {
    name: "Gale",
    class: "Wizard",
    image: Gale,
    startingStats: {
      Strength: 9,
      Dexterity: 14,
      Constitution: 13,
      Intelligence: 16,
      Wisdom: 12,
      Charisma: 14,
    },
    party: [
      {
        name: "Lae'zel",
        description:
          "Acts as a protective barrier, ensuring Gale has the space and safety to cast spells effectively.",
      },
      {
        name: "Wyll",
        description:
          "The combination of wizard and warlock spells offers a dynamic range of magical attacks and defenses.",
      },
      {
        name: "Astarion",
        description:
          "Can eliminate threats that get too close to Gale, providing valuable intelligence for spell strategy.",
      },
    ],
  },
  {
    name: "Lae'zel",
    class: "Fighter",
    image: Laezel,
    startingStats: {
      Strength: 15,
      Dexterity: 14,
      Constitution: 14,
      Intelligence: 10,
      Wisdom: 8,
      Charisma: 10,
    },
    party: [
      {
        name: "Shadowheart",
        description:
          "Provides healing and buffs, ensuring Laezel can stay in the fight longer.",
      },
      {
        name: "Gale",
        description:
          "Offers ranged support, allowing Laezel to focus on engaging enemies up close.",
      },
      {
        name: "Wyll",
        description:
          "Adds a mix of magic and physical combat to the party, providing versatility.",
      },
    ],
  },
  {
    name: "Wyll",
    class: "Warlock",
    image: Wyll,
    startingStats: {
      Strength: 8,
      Dexterity: 13,
      Constitution: 14,
      Intelligence: 12,
      Wisdom: 12,
      Charisma: 16,
    },
    party: [
      {
        name: "Lae'zel",
        description:
          "Provides a solid frontline, protecting Wyll as he casts from a distance.",
      },
      {
        name: "Shadowheart",
        description:
          "Her support capabilities ensure Wyll can maximize his spellcasting potential.",
      },
      {
        name: "Astarion",
        description:
          "Astarion's stealth and damage output can quickly take down targets weakened by Wyll's magic.",
      },
    ],
  },
  {
    name: "Shadowheart",
    class: "Cleric",
    image: Shadowheart,
    startingStats: {
      Strength: 10,
      Dexterity: 9,
      Constitution: 13,
      Intelligence: 10,
      Wisdom: 16,
      Charisma: 13,
    },
    party: [
      {
        name: "Gale",
        description:
          "This magical duo with Wyll provides a broad range of offensive and defensive capabilities.",
      },
      {
        name: "Wyll",
        description:
          "Alongside Gale, creates a balanced and resilient party with diverse magical abilities.",
      },
      {
        name: "Lae'zel",
        description:
          "Ensures that the party has a solid frontline, allowing Shadowheart to focus on support from a safer distance.",
      },
    ],
  },
];

export const tavParties = [
  {
    class: "Barbarian",
    party: [
      {
        name: "Astarion",
        description:
          "Provides critical stealth capabilities and high single-target damage.",
      },
      {
        name: "Shadowheart",
        description:
          "Her divine magic offers healing and support, vital for sustained engagements.",
      },
      {
        name: "Gale",
        description:
          "His arcane prowess delivers powerful area-of-effect and control spells.",
      },
    ],
  },
  {
    class: "Bard",
    party: [
      {
        name: "Lae'zel",
        description:
          "Offers a robust front-line defense and strong melee combat presence.",
      },
      {
        name: "Wyll",
        description:
          "Brings versatile magical attacks and crowd control options.",
      },
      {
        name: "Shadowheart",
        description:
          "Provides essential healing and buffing, bolstering party resilience.",
      },
    ],
  },
  {
    class: "Cleric",
    party: [
      {
        name: "Astarion",
        description:
          "Adds agility and precision strikes, complementing the Cleric's magic.",
      },
      {
        name: "Gale",
        description:
          "Delivers a wide range of magical attacks and strategic versatility.",
      },
      {
        name: "Lae'zel",
        description:
          "Serves as a dependable tank, absorbing and deflecting enemy attacks.",
      },
    ],
  },
  {
    class: "Druid",
    party: [
      {
        name: "Wyll",
        description:
          "His eldritch magic enhances the party's offensive magic capabilities.",
      },
      {
        name: "Astarion",
        description:
          "Provides indispensable stealth and backstabbing abilities.",
      },
      {
        name: "Shadowheart",
        description:
          "Augments the party's durability with healing and protective spells.",
      },
    ],
  },
  {
    class: "Fighter",
    party: [
      {
        name: "Gale",
        description:
          "Brings powerful spellcasting to support the Fighter's physical prowess.",
      },
      {
        name: "Shadowheart",
        description:
          "Ensures the party's longevity with healing and divine spells.",
      },
      {
        name: "Astarion",
        description:
          "Offers versatile support through stealth and quick strikes.",
      },
    ],
  },
  {
    class: "Monk",
    party: [
      {
        name: "Lae'zel",
        description: "Her martial prowess complements the Monk's combat style.",
      },
      {
        name: "Gale",
        description: "Provides essential magical support and area control.",
      },
      {
        name: "Shadowheart",
        description: "Her cleric abilities offer crucial healing and buffs.",
      },
    ],
  },
  {
    class: "Paladin",
    party: [
      {
        name: "Astarion",
        description:
          "His rogue skills add a necessary element of subtlety and finesse.",
      },
      {
        name: "Gale",
        description:
          "Augments the party's magical offense and strategic depth.",
      },
      {
        name: "Wyll",
        description:
          "Introduces additional magical firepower and crowd control.",
      },
    ],
  },
  {
    class: "Ranger",
    party: [
      {
        name: "Lae'zel",
        description: "Provides frontline engagement and physical resilience.",
      },
      {
        name: "Shadowheart",
        description: "Brings valuable healing and utility magic to the group.",
      },
      {
        name: "Gale",
        description:
          "His spellcasting diversifies the party's tactical options.",
      },
    ],
  },
  {
    class: "Rogue",
    party: [
      {
        name: "Lae'zel",
        description:
          "Her combat skills secure the frontline, allowing the Rogue to maneuver.",
      },
      {
        name: "Wyll",
        description: "Offers powerful spells to control and damage enemies.",
      },
      {
        name: "Shadowheart",
        description:
          "Provides essential support with healing and protection spells.",
      },
    ],
  },
  {
    class: "Sorcerer",
    party: [
      {
        name: "Lae'zel",
        description:
          "Ensures the Sorcerer can cast spells without interruption.",
      },
      {
        name: "Astarion",
        description: "Adds versatility with his sneaking and lockpicking.",
      },
      {
        name: "Shadowheart",
        description:
          "Augments the party's magical capabilities with divine support.",
      },
    ],
  },
  {
    class: "Warlock",
    party: [
      {
        name: "Gale",
        description:
          "Creates a formidable pair of casters with complementary magic.",
      },
      {
        name: "Lae'zel",
        description:
          "Her warrior skills protect the Warlock during spellcasting.",
      },
      {
        name: "Shadowheart",
        description:
          "Provides healing and buffs, ensuring the party remains at full strength.",
      },
    ],
  },
  {
    class: "Wizard",
    party: [
      {
        name: "Lae'zel",
        description:
          "Acts as a guardian, keeping enemies at bay with her martial skills.",
      },
      {
        name: "Astarion",
        description:
          "Brings critical support through stealth and tactical attacks.",
      },
      {
        name: "Shadowheart",
        description:
          "Her healing and protective magic are indispensable for party survival.",
      },
    ],
  },
];
