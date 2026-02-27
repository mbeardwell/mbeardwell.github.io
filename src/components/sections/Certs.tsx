import BorderedCard from "@components/BorderedCard";
import Section from "@components/Section";
import { JSX } from "react";

interface CertProps {
  issuer: string;
  name: string
  dateIssued: string;
}
function Cert({ issuer, name, dateIssued }: CertProps): JSX.Element {
  return (
    <BorderedCard className="flex flex-row gap-4 p-3 items-center">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-lg text-content">{issuer}</span>
        <span className="text-content">{name}</span>
        <span className="text-content text-sm">{dateIssued}</span>
      </div>
    </BorderedCard>
  );
}

export default function Certs(): JSX.Element {
  return (
    <Section id="certs">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <h2>Certifications</h2>
        <div className="flex flex-col gap-4">
          <Cert issuer="CompTIA" name="Security+ (SY0-701)" dateIssued="In Progress" />
          <Cert issuer="Security Blue Team" name="Intro to OSINT" dateIssued="Jun 2025" />
          <Cert issuer="TryHackMe" name="Intro to Cyber Security" dateIssued="Feb 2024" />
          <Cert issuer="Prince's Trust" name="TEAM (12-week programme including First Aid)" dateIssued="Jan 2024 — Apr 2024" />
          <Cert issuer="TryHackMe" name="Pre-Security" dateIssued="Apr 2022" />
        </div>
      </div>
    </Section>
  );
}
