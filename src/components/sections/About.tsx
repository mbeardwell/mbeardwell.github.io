import Section from "@components/Section";
import { JSX } from "react";

export default function About(): JSX.Element {
    return (
        <Section id="about">
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-accent">
                    About
                </h2>
                <div className="flex flex-col gap-3 mx-2">
                    <span className="text-content text-lg">
                        Open to volunteering, peer projects, or technical collaboration. Not seeking paid roles — currently focused on Security+ and health recovery.
                    </span>
                    <span className="text-content text-lg">
                        Training for a SOC Analyst role through hands-on practice. Completed 100+ labs on TryHackMe, covering SIEM, log analysis, packet capture, shell scripting, and network monitoring.
                        Also self-studying OSINT (especially HUMINT-style profiling) and reverse engineering.
                    </span>
                </div>
            </div>
        </Section>
    );
}
