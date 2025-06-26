import Section from "@components/Section";
import { JSX, useEffect, useRef } from "react";
import { getStats } from "src/stats";

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
                    </span> 
                    on TryHackMe!`;
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
                <div className="flex flex-col gap-4 text-content max-w-3xl mx-auto">
                    <p>
                        Open to <span className="font-semibold">volunteering</span>, <span className="font-semibold">peer projects</span>, or <span className="font-semibold">technical collaboration</span>. Not seeking paid roles — currently focused on <span className="font-semibold">Security+</span> and <span className="font-semibold">health recovery</span>.
                    </p>
                    <div className="flex flex-col-reverse md:flex-row max-w-3xl mx-auto justify-center align-center">
                        <div className="flex flex-col gap-4">
                            <div>
                                <p>
                                    Training for a SOC Analyst role through <span className="font-semibold">hands-on labs</span>. Completed <span className="font-semibold">100+ TryHackMe labs</span> covering:
                                </p>
                                <ul className="list-disc list-inside pl-6">
                                    <li>SIEM</li>
                                    <li>log analysis</li>
                                    <li>packet capture</li>
                                    <li>shell scripting</li>
                                    <li>network monitoring</li>
                                </ul>
                            </div>
                            <p>Also self-studying <span className="font-semibold">OSINT</span> (HUMINT-style profiling).</p>
                        </div>
                        {/*TryHackMe Stats*/}
                        <div className="flex flex-col justify-center my-6 md:my-0 gap-3 text-center">
                            <div className="relative w-[331px] h-[88px] self-center scale-[0.8] md:scale-[1]">
                                <div className="absolute w-full h-full bg-content"/>
                                <iframe
                                    className="absolute translate-x-[2px] translate-y-[2px] w-[331px] h-[88px]"
                                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=43470"
                                />
                                <div className="absolute w-full h-full border-content border-4"/>
                            </div>
                            <span ref={topPercentageRef}>
                                <span className="font-semibold">Top-ranked</span> on TryHackMe
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
