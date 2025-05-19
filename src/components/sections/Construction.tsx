import Section from "@components/Section";
import { JSX } from "react";

export default function Construction(): JSX.Element {
    return (
        <Section id="construction">
            <div className="flex flex-row justify-center items-center gap-4 text-2xl md:text-4xl text-content font-bold ">
            <p>🚧</p>
            <p className="text-wrap text-center">This page is under construction</p>
            <p>🚧</p>
            </div>
        </Section>
    );
}