import Section from "@components/Section";
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
        <h2 className="text-3xl font-bold text-accent text-center">About</h2>
        <div className="flex flex-col gap-4 text-content max-w-4xl mx-auto">
          <p>
            <span className="font-bold">
              Open to volunteer cybersecurity projects, peer collaboration, and
              skill-building work.
            </span>{" "}
            Not seeking paid roles — currently focused on Security+ and health
            recovery.
          </p>
          <div className="flex flex-col-reverse md:flex-row justify-between align-between w-full">
            <div className="flex flex-col gap-4 text-justify">
              <p>
                Security analyst with a focus on digital forensics and OSINT.
                Strong interest in artefact extraction and real-world identity
                resolution.
              </p>
              <p>
                Forensics background spans lab-based and real-world recovery
                using Autopsy, dd, foremost, and photorec.
              </p>
            </div>
            
          </div>
          <div className="flex flex-col gap-4 text-justify">
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
