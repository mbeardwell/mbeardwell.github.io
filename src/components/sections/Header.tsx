import { JSX } from "react";
import IconPersonal from "@icons/personal-logo.svg?react";
import IconHamburger from "@icons/hamburger.svg?react";
import Icon from "@components/Icon";

export default function Header(): JSX.Element {
    return (
        <header
            id="navbar"
            className="sticky top-0 z-50 w-full bg-accent p-2 flex justify-center"
        >
            <div className="w-full max-w-6xl flex items-center relative">
                {/* Logo */}
                <a href="/#home" className="shrink-0">
                    <Icon Svg={IconPersonal} paintClass="text-content hover:text-surface !w-8 !h-8" />
                </a>

                {/* Navigation */}
                <nav
                    className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-6 text-xl text-content"
                    aria-label="Main navigation"
                >
                    <a href="/#home" className="hover:text-surface">Home</a>
                    <a href="/#about" className="hover:text-surface">About</a>
                    <a href="/#contact" className="hover:text-surface">Contact</a>
                </nav>

                {/* Hamburger (Mobile) */}
                {/*<button
                    className="absolute right-0 md:hidden"
                    data-dropdown-toggle="hamburger-dropdown"
                    aria-label="Open menu"
                >
                    <Icon Svg={IconHamburger} paintClass="text-content hover:text-surface !w-8 !h-8" />
                </button>*/}
            </div>
        </header>
    );
}
