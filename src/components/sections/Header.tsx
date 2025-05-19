import { JSX } from "react";

export default function Header(): JSX.Element {
    return (
        <header id="navbar" className="relative z-50 flex flex-row flex-nowrap justify-center p-2 bg-accent sticky top-0 w-full">
            <nav className="flex flex-row gap-6 text-xl text-content visited:text-content">
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
