import { JSX } from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps): JSX.Element {
    return (
        <section
            id={id}
            className="scroll-mt-12 border-b-[3px] border-content w-full flex flex-row justify-center items-center"
        >
            <div className="w-full max-w-5xl max-xl:px-6 py-10 mx-auto min-w-0">
                {children}
            </div>
        </section>
    );
}
