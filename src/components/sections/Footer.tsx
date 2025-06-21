import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="z-10 bg-surface w-full flex flex-row justify-between gap-4 py-8 px-8">
            <p className="text-md text-content">&copy; {(new Date()).getFullYear()} &middot; Matthew Beardwell</p>
            <p className="text-md text-content">Developed in React/Tailwind</p>
        </footer>
    );
}
