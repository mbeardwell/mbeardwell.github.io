import Button from "@components/Button";
import IconGitHub from "@icons/brand-github.svg?react";
import IconLinkedIn from "@icons/brand-linkedin.svg?react";
import IconTHM from "@icons/brand-tryhackme.svg?react";
import IconFile from "@icons/file-text.svg?react";
import { JSX, useEffect, useRef } from "react";
import { getStats } from "src/stats";
import Section from "@components/Section";

const PROFILE_HEIGHT: number = 200;
const PROFILE_WIDTH: number = 200;

function ImageBlock(): JSX.Element {
    return (
        <div
            style={{ width: `${PROFILE_WIDTH}px`, height: `${PROFILE_HEIGHT}px` }}
            className="relative rounded-full overflow-hidden flex-shrink-0"
        >
            {/* Profile image */}
            <img
                className="absolute inset-0 w-full h-full object-cover hover:scale-95 transition duration-250 ease-(--button-ease)"
                src="/images/profile/profile--512.png"
                srcSet={`
                    /images/profile/profile--128.png 128w,
                    /images/profile/profile--256.png 256w,
                    /images/profile/profile--512.png 512w
                `}
                sizes="(max-width: 512px) 100vw, 512px"
                alt="Matthew Beardwell profile image"
            />
            {/* Profile image border */}
            <div
                className="absolute inset-0 w-full h-full rounded-full border-solid border-4 border-content pointer-events-none">
            </div>
        </div>
    );
}

function Buttons(): JSX.Element {
    return (
        <div className="flex flex-row justify-center gap-4">
            {/* CV button*/}
            <Button
                href="/cv.pdf"
                text="CV"
                Icon={IconFile}
                iconClassName="stroke-content"
            />
            {/* LinkedIn button*/}
            <Button
                href="https://linkedin.com/in/mbeardwell/"
                Icon={IconLinkedIn}
                iconClassName="stroke-content fill-content"
            />
            {/* GitHub button*/}
            <Button
                href="https://github.com/mbeardwell"
                Icon={IconGitHub}
                iconClassName="stroke-content fill-content text-content"
            />
            {/* TryHackMe button*/}
            <Button
                href="https://tryhackme.com/p/mbeardwell"
                Icon={IconTHM}
                iconClassName="fill-content"
            />
        </div>
    );
}

function TextBlock({ topPercentageRef }: { topPercentageRef: React.RefObject<HTMLSpanElement | null> }): JSX.Element {
    return (
        <div className="md:max-w-[40vw] flex flex-col gap-3">
            <h1 className="text-accent text-4xl font-bold">Matthew Beardwell</h1>
            <h2 className="text-content text-2xl">SOC Analyst Trainee</h2>
            <span
                ref={topPercentageRef}
                className="text-content text-lg italic flex flex-col justify-start items-center gap-1"
            >
                BSc Computer Science &middot; Top-ranked on TryHackMe &middot; Security+ in progress
            </span>
            <span
                className="text-content text-lg"
            >
                Focusing on CompTIA Security+ revision during health recovery. Not job-seeking at present. Site and CV are for long-term professional visibility only.
            </span>
            <Buttons />
        </div>
    );
}

export default function Hero(): JSX.Element {
    const topPercentageRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        (async () => {
            const stats = await getStats();
            const interval = setInterval(() => {
                if (topPercentageRef.current) {
                    topPercentageRef.current.innerHTML = `BSc Computer Science &middot; Top ${stats["topPercentage"]}% on TryHackMe &middot; Security+ in progress`;
                    clearInterval(interval);
                }
            }, 100);
            return;
        })();
    }, []);

    return (
        <Section id="hero">
            <div
                className="w-full flex flex-col-reverse md:flex-row flex-wrap justify-center items-center gap-[8vw] box-border"
            >
                <TextBlock topPercentageRef={topPercentageRef} />
                {/* Vertical Divider */}
                {/* <div className="bg-accent hidden md:block md:w-px md:self-stretch" /> */}
                <ImageBlock />
            </div>
        </Section >
    );
}
