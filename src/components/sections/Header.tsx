import { JSX } from "react";

export default function Header(): JSX.Element {
    return (
        <header
            id="navbar"
            className="sticky top-0 z-50 flex flex-row flex-nowrap justify-center p-2 bg-accent w-full"
        >
            <nav className="flex flex-row gap-6 text-xl text-content visited:text-content">
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
