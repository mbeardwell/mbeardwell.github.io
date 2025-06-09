import Section from "@components/Section";
import { JSX } from "react";

export default function About(): JSX.Element {
    return (
        <Section id="about">
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold text-accent">
                    About
                </h2>
                <span className="text-content text-lg">
                    Open to volunteering; not seeking paid roles — currently focused on Security+ and health recovery.
                </span>
            </div>
        </Section>
    );
}
