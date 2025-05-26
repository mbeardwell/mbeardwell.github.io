import colours from "@styles/colors.json" assert { type: "json" };
import { IOptions } from "@tsparticles/engine";
import type { Colours } from "types";

const typedColours: Colours = colours;
const COLOUR: keyof Colours = "accent";

export const particlesLinks = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" }, opacity: 0 },
  particles: {
    number: {
      value: 100,
      density: { enable: true, width: 1366, height: 768 },
      limit: { mode: "delete", value: 100 },
    },
    color: { value: typedColours[COLOUR] },
    opacity: { value: 0.5 },
    size: { value: 3 },
    links: {
      enable: true,
      distance: 200,
      color: typedColours[COLOUR],
      opacity: 0.35,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "bounce" },
    },
    bounce: {
      horizontal: {
        value: 1,
      },
      vertical: {
        value: 1,
      },
    },
  },
  retina_detect: true,
  autoPlay: true,
  detectRetina: true,
  fpsLimit: 60,
} as unknown as IOptions;
