import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="z-10 bg-surface w-full flex flex-row justify-between gap-4 py-6 px-8">
            <p className="text-md text-left">Matthew Beardwell &copy; {(new Date()).getFullYear()}</p>
            <p className="text-md text-right">Developed in React/Tailwind</p>
        </footer>
    );
}
