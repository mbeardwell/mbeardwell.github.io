import Section from "@components/Section";
import THM from "@components/sections/THM";
import { JSX } from "react";

function Semibold({ children }: { children: React.ReactNode }): JSX.Element {
  return <span className="font-semibold">{children}</span>;
}

function List({ children }: { children: React.ReactNode }): JSX.Element {
  return <ul className="list-disc list-inside pl-6">{children}</ul>;
}

export default function About(): JSX.Element {
  return (
    <Section id="about">
      <div className="flex flex-col gap-6">
        <h2>About</h2>
        <div className="text-content">
          {/* Desktop: float layout */}
          <div className="hidden md:block overflow-hidden">
            <p className="mb-4">
              <span className="font-bold">
                Open to volunteer cybersecurity projects, peer collaboration, and
                skill-building work.
              </span>{" "}
              Not seeking paid roles — currently focused on Security+ and health
              recovery.
            </p>
            <p className="mb-4">
              Specialising in digital forensics and open-source intelligence.
              Strong interest in artefact extraction and real-world identity resolution.
            </p>
            <div className="float-right ml-6 mb-4">
              <THM />
            </div>
            <p className="mb-4">
              Forensics background spans lab-based and real-world recovery
              using Autopsy, dd, foremost, and photorec.
            </p>
            <p>
              OSINT work includes identity/location resolution, social link
              mapping, and client requests to trace long-lost family or friends.
            </p>
          </div>

          {/* Mobile: stacked layout */}
          <div className="flex flex-col gap-4 md:hidden">
            <p>
              <span className="font-bold">
                Open to volunteer cybersecurity projects, peer collaboration, and
                skill-building work.
              </span>{" "}
              Not seeking paid roles — currently focused on Security+ and health
              recovery.
            </p>
            <p>
              Specialising in digital forensics and open-source intelligence.
              Strong interest in artefact extraction and real-world identity resolution.
            </p>
            <div className="w-fit mx-auto">
              <THM />
            </div>
            <p>
              Forensics background spans lab-based and real-world recovery
              using Autopsy, dd, foremost, and photorec.
            </p>
            <p>
              OSINT work includes identity/location resolution, social link
              mapping, and client requests to trace long-lost family or friends.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
