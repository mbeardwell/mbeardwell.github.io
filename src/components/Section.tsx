import { JSX } from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps): JSX.Element {
    return (
        <section
            id={id}
            className="w-full py-16 text-center flex flex-row justify-center items-center"
        >
            {children}
        </section>
    );
}
