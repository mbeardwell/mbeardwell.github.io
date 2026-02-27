import BorderedCard from "@components/BorderedCard";
import Section from "@components/Section";
import { JSX } from "react";

interface CertProps {
  issuer: string;
  name: string
  dateIssued: string;
  certFile?: string;
}

function Cert({ issuer, name, dateIssued, certFile }: CertProps): JSX.Element {
  return (
    <BorderedCard className="flex flex-row gap-4 p-3 items-center">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-lg text-content">{issuer}</span>
          <span className="text-content">{name}</span>
          <span className="text-content text-sm">{dateIssued}</span>
        </div>
        {certFile ? <img className="max-h-20" src={`./public/docs/certs/${certFile}`}/> : ""} 
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
          <Cert issuer="CompTIA" name="Security+ (SY0-701)" dateIssued="In Progress"/>
          <Cert issuer="Security Blue Team" name="Intro to OSINT" dateIssued="20th June 2025" certFile="sec-blue-team-intro-osint.png" />
          <Cert issuer="The King's Trust" name="TEAM (12-week employability programme including First Aid)" dateIssued="3rd April 2024" certFile="team-programme.png" />
          <Cert issuer="TryHackMe" name="Intro to Cyber Security" dateIssued="19th February 2024" />
          <Cert issuer="TryHackMe" name="Pre-Security" dateIssued="17th April 2022" certFile="thm-pre-security.png" />
        </div>
      </div>
    </Section>
  );
}
