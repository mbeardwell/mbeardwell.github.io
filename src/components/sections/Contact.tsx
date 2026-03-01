import Button from "@components/Button";
import Section from "@components/Section";
import IconDiscord from "@icons/brand-discord.svg?react";
import IconMail from "@icons/mail.svg?react";
import { JSX } from "react";

function Buttons(): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-3">
            <Button
                href="mailto:contact@mbeardwell.com"
                text="contact@mbeardwell.com"
                Svg={IconMail}
                paintTypes={["stroke"]}
            />
{/*             <Button
                href="https://discord.gg/2HUhFy6QrB"
                text="Discord (follow instructions)"
                Svg={IconDiscord}
                paintTypes={["fill"]}
            /> */}
        </div>
    );
}

export default function Contact(): JSX.Element {
    return (
        <Section id="contact">
            <div className="flex flex-col gap-6 text-center">
                <h2>
                    Contact
                </h2>
                <div className="flex flex-col flex-nowrap gap-4 text-lg text-content">
                    {/* <p>Looking to contribute to real-world cybersecurity work in a volunteer capacity.</p> */}
                    <p>Drop me an e-mail:</p>
                    <Buttons />
                </div>
            </div>
        </Section>
    );
}
