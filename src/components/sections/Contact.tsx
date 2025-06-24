import Button from "@components/Button";
import Section from "@components/Section";
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
        </div>
    );
}

export default function Contact(): JSX.Element {
    return (
        <Section id="contact">
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-accent">
                    Contact
                </h2>
                <div className="flex flex-col flex-nowrap gap-4">
                    <p className="text-lg text-content">
                        Drop me an email!
                    </p>
                    <Buttons />
                </div>
            </div>
        </Section>
    );
}
