import Section from "@components/Section";
import { JSX, useEffect, useRef } from "react";
import { getStats } from "src/stats";

function Semibold({ children }: { children: React.ReactNode }): JSX.Element {
    return <span className="font-semibold">{children}</span>
}

function List({ children }: { children: React.ReactNode }): JSX.Element {
    return <ul className="list-disc list-inside pl-6">{children}</ul>
}

export default function About(): JSX.Element {
    const topPercentageRef = useRef<HTMLSpanElement | null>(null);
    useEffect(() => {
        (async () => {
            const stats = await getStats();
            const interval = setInterval(() => {
                if (topPercentageRef.current) {
                    topPercentageRef.current.innerHTML = `
                    <span class="font-semibold">
                        Top ${stats["topPercentage"]}%
                    </Semibold> 
                    on TryHackMe`;
                    clearInterval(interval);
                }
            }, 100);
            return;
        })();
    }, []);

    return (
        <Section id="about">
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-accent text-center">
                    About
                </h2>
                <div className="flex flex-col gap-4 text-content max-w-4xl mx-auto">
                    <p>
                        Open to <Semibold>volunteering</Semibold>, <Semibold>peer projects</Semibold>, or <Semibold>technical collaboration</Semibold>. Not seeking paid roles — currently focused on <Semibold>Security+</Semibold> and <Semibold>health recovery</Semibold>.
                    </p>
                    <div className="flex flex-col-reverse md:flex-row justify-between align-between w-full">
                        <div className="flex flex-col gap-4">
                            <div>
                                <p>
                                    Training in <Semibold>Security Operations</Semibold> and <Semibold>Threat Intelligence</Semibold> through <Semibold>hands-on labs</Semibold> and open-source investigation.
                                    Completed 100+ TryHackMe labs covering:
                                </p>
                                <List>
                                    <li>SIEM triage</li>
                                    <li>Log analysis</li>
                                    <li>Packet capture</li>
                                    <li>Shell scripting</li>
                                    <li>Network monitoring</li>
                                </List>
                            </div>
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
                                <Semibold>Top-ranked</Semibold> on TryHackMe
                            </span>
                        </div>
                    </div>
                    <div>
                        <p>Also applying <Semibold>OSINT</Semibold> to:</p>
                        <List>
                            <li>Threat actor profiling</li>
                            <li>Human-targeted investigations (UK context)</li>
                            <li>Handle correlation and social network tracing</li>
                            <li>Background research using public records (probate, Companies House, metadata, electoral traces)</li>
                            <li>Image geolocation and facial linkage</li>
                            <li>Toolkit authoring (UK Person-centric OSINT Toolkit)</li>
                        </List>
                    </div>
                </div>
            </div>
        </Section>
    );
}
