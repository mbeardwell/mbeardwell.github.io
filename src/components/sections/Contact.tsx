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
                Icon={IconMail}
                iconClassName="stroke-content"
            />
            <Button
                href="https://discord.gg/2HUhFy6QrB"
                text="mbeardwell"
                iconClassName="fill-content"
                Icon={IconDiscord}
            />
        </div>
    );
}

export default function Contact(): JSX.Element {
    return (
        <Section id="contact">
            <div className="flex flex-col">
                <h2 className="text-4xl font-bold text-accent">
                    Contact
                </h2>
                <div className="flex flex-col flex-nowrap gap-3">
                    <p className="text-lg text-content">
                        Drop me a message via email or Discord!
                    </p>
                    <Buttons />
                </div>
            </div>
        </Section>
    );
}
