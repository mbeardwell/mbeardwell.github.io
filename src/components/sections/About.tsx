import Section from "@components/Section";
import THM from "@components/sections/THM";
import { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <Section id="about">
      <div className="flex flex-col gap-6">
        <h2>About</h2>
        <div className="text-content overflow-hidden text-center md:text-left">
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
          <div className="w-fit mx-auto mb-4 md:float-right md:ml-6">
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
      </div>
    </Section>
  );
}
