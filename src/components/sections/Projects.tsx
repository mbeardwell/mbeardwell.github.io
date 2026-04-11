import BorderedCard from "@components/BorderedCard";
import Section from "@components/Section";
import IconGitHub from "@icons/brand-github.svg?react";
import Button from "@components/Button";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

function Project({ title, description, link }: ProjectProps) {
  return (
    <BorderedCard className="p-3">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between md:items-start">
          <h3 className="text-center md:text-left">{title}</h3>
		  <Button
		    href={link}
		    text="View on GitHub"
		    Svg={IconGitHub}
		    paintTypes={["fill", "stroke", "text"]}
		  />
        </div>
        <p className="text-justify">{description}</p>
      </div>
    </BorderedCard>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 text-content max-w-4xl mx-auto">
        <h2>Projects</h2>

        <Project
          title="Python Port Scanner: ActiveReconLite"
          description="Built a Python-based TCP connect port scanner using multiprocessing. Validates user input, grabs banners, and writes results to a file.
    Demonstrates socket programming, argparse, regex, and parallel scanning."
          link="https://github.com/mbeardwell/active-recon-lite"
        />

        <Project
          title="OSINT Case Study: Location and Identity Resolution from Minimal Public Signals"
          description="Tracked real-world identity from anonymised YouTube uploads using public data. 
            Shows attacker thinking, threat profiling, and privacy risk awareness. 
            Demonstrates threat intelligence process fundamentals: collection, enrichment, analysis, and attribution based on minimal public indicators."
          link="https://github.com/mbeardwell/osint-i3-case-study"
        />

        <Project
          title="UK Person-centric OSINT Toolkit"
          description="Curation of UK-only, legal person-focused OSINT resources for investigative use.
            Featured by “Learn Cybersecurity” Telegram channel (27k subscribers); 100+ LinkedIn/Substack clicks in 1 week."
          link="https://github.com/mbeardwell/uk-personal-osint-toolkit"
        />

        <Project
          title="Bachelor's Thesis: Faster Dynamically Instrumented Programs"
          description="Built a runtime patching tool on ARM Linux to redirect processor instructions in memory. 
            Mirrors techniques used in evasive malware."
          link="https://github.com/mbeardwell/arm-fp-emu"
        />
      </div>
    </Section>
  );
}
