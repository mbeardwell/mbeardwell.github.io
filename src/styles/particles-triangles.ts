import colours from "@styles/colors.json" assert { type: "json" };
import { particlesLinks } from "@styles/particles-links";
import { IOptions } from "@tsparticles/engine";
import type { Colours } from "types";

const typedColours: Colours = colours;
const COLOUR: keyof Colours = "accent";

export const particlesTris: IOptions = structuredClone(particlesLinks);

particlesTris.particles.links = {
  enable: true,
  distance: 150,
  color: typedColours[COLOUR],
  opacity: 0.35,
  width: 1,
  triangles: {
    color: typedColours[COLOUR],
    enable: true,
    frequency: 1,
  },
};

particlesTris.particles.number.value = (particlesTris.particles.number.value as any) / 2;
