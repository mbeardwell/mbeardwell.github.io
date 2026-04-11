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
      <div className="flex flex-row w-full gap-1 justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-lg text-content">{issuer}</span>
          <span className="text-content">{name}</span>
          <span className="text-content text-sm">{dateIssued}</span>
        </div>
        {certFile ? (
          <a href={`./docs/certs/${certFile}.pdf`} className="flex items-center shrink-0">
            <img className="max-h-20 w-auto border-content rounded-md border-[3px] hover:brightness-75" src={`./docs/certs/${certFile}.png`}/>
          </a>
        ) : ""}
      </div>
    </BorderedCard>
  );
}

export default function Certs(): JSX.Element {
  return (
    <Section id="certs">
      <div className="flex flex-col gap-6">
        <h2>Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Cert issuer="CompTIA" name="Security+ (SY0-701)" dateIssued="In Progress"/>
          <Cert issuer="Security Blue Team" name="Intro to OSINT" dateIssued="20th June 2025" certFile="sec-blue-team-intro-osint" />
          <Cert issuer="The King's Trust" name="TEAM (12-week employability programme including First Aid)" dateIssued="3rd April 2024" certFile="team-programme" />
          <Cert issuer="TryHackMe" name="Pre-Security" dateIssued="17th April 2022" certFile="thm-pre-security" />
        </div>
      </div>
    </Section>
  );
}
