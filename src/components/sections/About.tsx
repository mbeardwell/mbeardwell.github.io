import Section from "@components/Section";
import { JSX, useEffect, useRef } from "react";
import { getStats } from "src/stats";

function Semibold({ children }: { children: React.ReactNode }): JSX.Element {
  return <span className="font-semibold">{children}</span>;
}

function List({ children }: { children: React.ReactNode }): JSX.Element {
  return <ul className="list-disc list-inside pl-6">{children}</ul>;
}

export default function About(): JSX.Element {
  const topPercentageRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    (async () => {
      const stats = await getStats();
      const interval = setInterval(() => {
        if (topPercentageRef.current) {
          topPercentageRef.current.innerHTML = `Top <span class="font-semibold">${stats["topPercentage"]}%</span> on TryHackMe (~100 hrs)`;
          clearInterval(interval);
        }
      }, 100);
      return;
    })();
  }, []);

  return (
    <Section id="about">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-accent text-center">About</h2>
        <div className="flex flex-col gap-4 text-content max-w-4xl mx-auto">
          <p>
            <span className="font-bold">Open to volunteer cybersecurity projects, peer collaboration, and skill-building work.</span> Not seeking paid roles — currently focused on Security+ and health
            recovery.
          </p>
          <div className="flex flex-col-reverse md:flex-row justify-between align-between w-full">
            <div className="flex flex-col gap-4 text-justify">
              <p>
                Security analyst with a focus on digital forensics and OSINT. 
                Strong interest in artefact extraction and real-world identity resolution.
              </p>
              <p>
                Forensics background spans lab-based and real-world recovery
                using Autopsy, dd, foremost, and photorec.
              </p>
            </div>
            {/*TryHackMe Stats*/}
            <div className="flex flex-col justify-center mx-0 md:mx-20 my-6 md:my-0 gap-3 text-center">
              <div className="relative w-[331px] h-[88px] self-center scale-[0.8] md:scale-[1]">
                <div className="absolute w-full h-full bg-content" />
                <iframe
                  className="absolute translate-x-[2px] translate-y-[2px] w-[331px] h-[88px]"
                  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=43470"
                />
                <div className="absolute w-full h-full border-content border-4" />
              </div>

              <span ref={topPercentageRef}>
                Top-ranked on TryHackMe (~100 hrs)
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-justify">
              <p>
                OSINT work includes identity/location resolution, social link mapping, and client requests to trace long-lost family or friends.
              </p>
            </div>
        </div>
      </div>
    </Section>
  );
}
