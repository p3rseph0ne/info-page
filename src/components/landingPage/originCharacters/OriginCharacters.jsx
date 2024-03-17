import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import OriginCharacter from "./OriginCharacter";
import { Headline } from "../../shared/styled-components.sc";
import Karlach from "../../../assets/characters/karlach.png";
import Shadowheart from "../../../assets/characters/shadowheart.png";
import Astarion from "../../../assets/characters/astarion.png";
import Gale from "../../../assets/characters/gale.png";
import Laezel from "../../../assets/characters/laezel.png";
import Wyll from "../../../assets/characters/wyll.png";
import styled from "styled-components";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NPCs = [
  {
    name: "Karlach",
    image: Karlach,
    description:
      "Karlach is a fierce and enigmatic warrior known for her distinctive red eyes and battle prowess. Marked by her past as a Flaming Fist mercenary, she carries the weight of experience on her shoulders. Her presence is intense and brooding, a testament to the internal conflict she endures due to the mysterious tadpole affliction. A survivor and a fighter, Karlach's resilience in the face of chaos and her determination to reclaim her destiny make her a formidable ally or a fearsome enemy within the treacherous world of Baldur's Gate 3.",
  },
  {
    name: "Shadowheart",
    image: Shadowheart,
    description:
      "Shadowheart is a secretive and complex half-elf cleric, serving the goddess Shar, Mistress of the Night. Her beauty is matched by her sharp mind and guarded nature. Often presenting a tough exterior, she wrestles with a complicated past and a burden she keeps close to her chest. Shadowheart is resourceful and determined, her loyalty hard-earned but unwavering once given. Her divine magic, cloaked in shadow and mystery, makes her an invaluable companion in the unpredictable journey across Baldur's Gate 3.",
  },
  {
    name: "Astarion",
    image: Astarion,
    description:
      "Astarion is a captivating character from Baldur's Gate 3, a high elf and a rogue vampire spawn with a charming yet predatory demeanor. He stands out with his sharp features, pale skin, and a piercing gaze that hints at his supernatural nature. Astarion relishes his vampiric abilities and the power they grant him, yet he is also burdened by his condition and servitude to a cruel master. His wit is as quick as his blade, making him a dangerous ally who can either offer a sly joke or a silent, deadly strike. Astarion's thirst for both blood and freedom drives many of his actions, giving him a complex blend of aristocratic arrogance and a deep-seated desire to shape his own destiny.",
  },
  {
    name: "Gale",
    image: Gale,
    description:
      "Gale is a well-educated and articulate wizard in Baldur's Gate 3, whose charm is as potent as his arcane knowledge. With a penchant for the dramatic and a taste for the finer things, Gale has an appetite for magic that is both a strength and a vulnerability, as he harbors a deadly secret that could spell his doom. His intelligence and vast reservoir of magical lore make him an invaluable companion. Gale's need to consume magical artifacts to stay alive adds a layer of urgency to his quest, and his approach to life is pragmatic yet tinged with a certain melancholy, knowing his condition's inevitable consequences.",
  },
  {
    name: "Lae'zel",
    image: Laezel,
    description:
      "Lae'zel is a formidable Githyanki warrior, known for her fierce combat skills and unyielding determination. Her regal bearing and striking silver skin set her apart, embodying the proud and martial culture from which she hails. Lae'zel is direct and values strength and efficiency, often clashing with those who do not meet her exacting standards. Her mission is of utmost importance to her, and she will not hesitate to cut down anything or anyone that stands in her way. Despite her stern exterior, she has a deep sense of loyalty and honor, making her a steadfast ally in the perilous journey of Baldur's Gate 3.",
  },
  {
    name: "Wyll",
    image: Wyll,
    description:
      "Wyll is a confident and charismatic human warlock in Baldur's Gate 3, known as the Blade of Frontiers. He's a hero to the people, with a reputation built on his daring exploits and a pact with a mysterious fiend that grants him his magical powers. Wyll's gallantry and desire to protect others often put him in harm's way, but his bravery is not without the complexity of his ambition and desire for fame. His silver tongue and swashbuckling flair make him as adept at charming his way through conflict as he is at facing it head-on. Behind his heroic facade, Wyll seeks to forge his own path and prove his worth beyond the expectations of his infernal pact.",
  },
];

function OriginCharacters() {
  return (
    <Container>
      <Headline>Get to know: Origin Characters</Headline>
      <CarouselContainer>
        <Carousel responsive={responsive} dragable={false}>
          {NPCs.map(({ name, image, description }) => (
            <OriginCharacter
              key={name}
              name={name}
              image={image}
              description={description}
            />
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}

export default OriginCharacters;

const Container = styled(Box)`
  width: 100%;
`;

const CarouselContainer = styled(Box)`
  margin: 2rem 8vw 0 8vw;
`;
