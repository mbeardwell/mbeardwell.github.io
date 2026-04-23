import Section from "@components/Section";
import CountUp from "@components/CountUp";
import { useReveal } from "@hooks/useReveal";
import { JSX, useEffect, useState } from "react";
import { getStats } from "src/stats";

type Stats = { username: string; topPercentage: number; completedRoomsNumber: number } | null;

export default function About(): JSX.Element {
  const [stats, setStats] = useState<Stats>(null);
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  useEffect(() => {
    (async () => setStats(await getStats()))();
  }, []);

  return (
    <Section id="about">
      <div className="flex flex-col gap-10">
        <p ref={r1} className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">About</p>

        <div ref={r2} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { val: stats?.topPercentage ?? 2,          prefix: "Top ", suffix: "%",        label: "Global Ranking — TryHackMe" },
            { val: stats?.completedRoomsNumber ?? 114,  prefix: "",     suffix: "",         label: "Rooms completed (100+ hrs) — TryHackMe"  },
            { val: 1,                                   prefix: "",     suffix: "st Class", label: "BSc Computer Science, KCL"  },
          ].map(({ val, prefix, suffix, label }) => (
            <div key={label} className="border-t-2 border-accent pt-3">
              <div className="font-serif text-[46px] text-content leading-none mb-2">
                <CountUp to={val} prefix={prefix} suffix={suffix} />
              </div>
              <div className="text-[10px] tracking-[0.14em] uppercase text-[var(--mu)]">{label}</div>
            </div>
          ))}
        </div>

        <div ref={r3} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <p className="text-[17px] leading-[1.75] text-content">
            <strong>Open to volunteer cybersecurity projects, peer collaboration, and skill-building work.</strong>{" "}
            Not seeking paid roles — currently focused on Security+ and health recovery.
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-[15px] leading-[1.8] text-[var(--mu)]">Specialising in digital forensics and open-source intelligence. Strong interest in artefact extraction and real-world identity resolution.</p>
            <p className="text-[15px] leading-[1.8] text-[var(--mu)]">Forensics background spans lab-based and real-world recovery using Autopsy, dd, foremost, and photorec.</p>
            <p className="text-[15px] leading-[1.8] text-[var(--mu)]">OSINT work includes identity/location resolution, social link mapping, and client requests to trace long-lost family or friends.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

