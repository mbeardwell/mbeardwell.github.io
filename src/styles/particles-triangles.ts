import colours from "@styles/colors.json" assert { type: "json" };
import { particlesLinks } from "@styles/particles-links";
import { IOptions } from "@tsparticles/engine";
import type { Colours } from "types";

const typedColours: Colours = colours;
const COLOUR: keyof Colours = "accent";

export const particlesTris: IOptions = structuredClone(particlesLinks);

particlesTris.particles.links ??= {};
(particlesTris.particles.links as any).triangles = {
  color: typedColours[COLOUR],
  enable: true,
  frequency: 1,
};

(particlesTris.particles.number as any) = { value: 60 };
