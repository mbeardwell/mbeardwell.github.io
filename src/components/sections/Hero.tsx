import Button from "@components/Button";
import Section from "@components/Section";
import IconDiscord from "@icons/brand-discord.svg?react";
import IconGitHub from "@icons/brand-github.svg?react";
import IconLinkedIn from "@icons/brand-linkedin.svg?react";
import IconFile from "@icons/file-text.svg?react";
import { JSX } from "react";

const PROFILE_HEIGHT: number = 200;
const PROFILE_WIDTH: number = 200;

function ImageBlock(): JSX.Element {
  return (
    <div
      style={{ width: `${PROFILE_WIDTH}px`, height: `${PROFILE_HEIGHT}px` }}
      className="relative rounded-full overflow-hidden flex-shrink-0"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover motion-safe:hover:scale-105 transition duration-250 ease-(--button-ease)"
        src="/images/profile/profile--128.png"
        srcSet={`
                    /images/profile/profile--128.png 128w,
                    /images/profile/profile--256.png 256w,
                    /images/profile/profile--512.png 512w
                `}
        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 256px"
        alt="Matthew Beardwell profile image"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 w-full h-full rounded-full border-solid border-4 border-content pointer-events-none"></div>
    </div>
  );
}

function Buttons(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
      <div className="flex justify-center md:justify-end">
        <Button
          href="/docs/cv/Matthew_Beardwell_CV.pdf"
          text="Download CV"
          Svg={IconFile}
          paintTypes={["stroke"]}
        />
      </div>
      <div className="flex flex-row gap-4 justify-center md:justify-end">
        <Button
          href="https://github.com/mbeardwell"
          Svg={IconGitHub}
          paintTypes={["fill", "stroke", "text"]}
        />
        <Button
          href="https://linkedin.com/in/mbeardwell"
          Svg={IconLinkedIn}
          paintTypes={["fill", "stroke"]}
        />
        <Button
          href="https://discord.gg/2HUhFy6QrB"
          Svg={IconDiscord}
          paintTypes={["fill"]}
        />
      </div>
    </div>
  );
}

function TextBlock(): JSX.Element {
  return (
    <div className="md:max-w-[40vw] flex flex-col gap-6 text-center md:text-right">
      <h1 className="text-content text-6xl font-bold tracking-wide">
        Matthew Beardwell
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-content text-2xl">
          Digital Forensics & OSINT Practitioner
        </p>
        <span className="text-content text-lg italic">
          1st Class BSc CS &middot; Security+ in progress
        </span>
        <Buttons />
      </div>
    </div>
  );
}

export default function Hero(): JSX.Element {
  return (
    <Section id="hero">
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-[8vw] box-border">
        <ImageBlock />
        <TextBlock />
      </div>
    </Section>
  );
}
