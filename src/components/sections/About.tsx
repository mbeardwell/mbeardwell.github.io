import Section from "@components/Section";
import { JSX } from "react";

export default function About(): JSX.Element {
    return (
        <Section id="about">
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-accent">
                    About
                </h2>
                <div className="flex flex-col gap-4">
                    <p className="text-content max-w-3xl mx-auto">
                        Open to <span className="font-semibold">volunteering</span>, <span className="font-semibold">peer projects</span>, or <span className="font-semibold">technical collaboration</span>. Not seeking paid roles — currently focused on <span className="font-semibold">Security+</span> and <span className="font-semibold">health recovery</span>.
                    </p>
                    <p className="text-content max-w-3xl mx-auto">
                        Training for a SOC Analyst role through <span className="font-semibold">hands-on labs</span>. Completed <span className="font-semibold">100+ TryHackMe labs</span> covering <span className="font-semibold">SIEM</span>, <span className="font-semibold">log analysis</span>, <span className="font-semibold">packet capture</span>, <span className="font-semibold">shell scripting</span>, and <span className="font-semibold">network monitoring</span>. Also self-studying <span className="font-semibold">OSINT</span> (HUMINT-style profiling) and <span className="font-semibold">reverse engineering</span>.
                    </p>

                    <div className="self-center mt-5">
                        <iframe
                            className="w-[329px] h-[88px]"
                            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=43470"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
