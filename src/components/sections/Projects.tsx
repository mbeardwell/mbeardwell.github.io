import Section from "@components/Section";
import IconGitHub from "@icons/brand-github.svg?react";
import { useReveal } from "@hooks/useReveal";
import { JSX } from "react";

interface ProjectProps {
  n: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

function Project({ n, title, description, tags, link }: ProjectProps) {
  const r = useReveal();
  return (
    <a    
      ref={r}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline text-inherit border border-[var(--bd)] p-7 transition-all duration-[220ms] hover:border-[var(--bdH)] hover:-translate-y-[3px] hover:shadow-[0_16px_48px_color-mix(in_srgb,var(--ac)_10%,transparent)]"
    >
      <div className="flex justify-between items-start gap-3 mb-3">
        <span className="font-serif text-[54px] leading-none text-accent opacity-[0.17] select-none">
          {n}
        </span>
        <div className="flex gap-1.5 flex-wrap justify-end pt-1">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] tracking-[0.1em] uppercase text-accent border border-[var(--bd)] px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="font-serif font-normal text-[18px] text-content leading-[1.35] mb-3">{title}</h3>
      <p className="text-[13px] text-[var(--mu)] leading-[1.72] mb-4">{description}</p>
      <span className="flex items-center gap-2 text-[11px] tracking-[0.06em] uppercase text-accent">
        <IconGitHub className="w-4 h-4 fill-accent" />
        View on GitHub →
      </span>
    </a>
  );
}

const PROJECTS: ProjectProps[] = [
  {
    n: "01",
    title: "Python Port Scanner: ActiveReconLite",
    tags: ["Python", "Networking", "Recon"],
    description: "TCP connect port scanner using multiprocessing — validates user input, grabs banners, and writes results to file. Demonstrates socket programming, argparse, regex, and parallel scanning.",
    link: "https://github.com/mbeardwell/active-recon-lite",
  },
  {
    n: "02",
    title: "OSINT Case Study: Identity Resolution from Minimal Public Signals",
    tags: ["OSINT", "Threat Intel", "Attribution"],
    description: "Tracked real-world identity from anonymised YouTube uploads. Shows attacker thinking, threat profiling, and threat intelligence fundamentals: collection, enrichment, analysis, and attribution.",
    link: "https://github.com/mbeardwell/osint-i3-case-study",
  },
  {
    n: "03",
    title: "UK Person-centric OSINT Toolkit",
    tags: ["OSINT", "UK", "Research"],
    description: "Curation of UK-only, legal person-focused OSINT resources. Featured by \"Learn Cybersecurity\" Telegram (27k subscribers); 100+ clicks in one week.",
    link: "https://github.com/mbeardwell/uk-personal-osint-toolkit",
  },
  {
    n: "04",
    title: "Bachelor's Thesis: Faster Dynamically Instrumented Programs",
    tags: ["ARM", "Linux", "Systems"],
    description: "Runtime patching tool on ARM Linux to redirect processor instructions in memory, mirroring techniques used in evasive malware. Demonstrates low-level security research fundamentals.",
    link: "https://github.com/mbeardwell/arm-fp-emu",
  },
];

export default function Projects(): JSX.Element {
  const r = useReveal();
  return (
    <Section id="projects">
      <div className="flex flex-col gap-10">
        <p ref={r} className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map(p => <Project key={p.n} {...p} />)}
        </div>
      </div>
    </Section>
  );
}

