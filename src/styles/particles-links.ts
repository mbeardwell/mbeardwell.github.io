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
      value: 50,
      density: { enable: true, width: 1366, height: 768 },
      limit: { mode: "delete", value: -1 },
    },
    color: { value: typedColours[COLOUR] },
    opacity: { value: 0.5 },
    size: { value: 6 },
    links: {
      enable: true,
      distance: 300,
      color: typedColours[COLOUR],
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.35,
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
  detectRetina: false,
  fpsLimit: 24,
} as unknown as IOptions;
