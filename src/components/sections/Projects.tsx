import Section from "@components/Section";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

function Project({ title, description, link }: ProjectProps) {
  return (
    <div className="project">
      <h3 className="text-xl font-bold text-content">{title}</h3>
      <p>{description}</p>
      <a className="text-accent hover:text-accent" href={link} target="_blank">
        View on GitHub
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 text-content max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-accent text-center">Projects</h2>

        <Project
          title="Python Port Scanner: ActiveReconLite"
          description="Built a Python-based TCP connect port scanner using multiprocessing.
            Outperforms Nmap in some cases by 60x; scanned 65k ports in 5s (vs Nmap's 5m). It validates user input, grabs banners, and writes results to a file.
            Demonstrates automation, socket programming, and parallel scanning."
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
            Featured on OSINTTech (Substack); 100+ LinkedIn/Substack clicks in 1 week"
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
