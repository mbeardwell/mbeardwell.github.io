import { JSX, useState } from "react";
import IconPersonal from "@icons/personal-logo.svg?react";
import IconHamburger from "@icons/hamburger.svg?react";
import IconCross from "@icons/cross.svg?react";
import Icon from "@components/Icon";

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

function Navigation({className = "", onLinkClick}: NavigationProps): JSX.Element {
  return (
    <nav
      className={`ml-auto gap-6 text-xl text-content px-4 ${className}`}
      aria-label="Main navigation"
    >
      <a href="/#home" className="hover:text-surface" onClick={onLinkClick}>Home</a>
      <a href="/#about" className="hover:text-surface" onClick={onLinkClick}>About</a>
      <a href="/#projects" className="hover:text-surface" onClick={onLinkClick}>Projects</a>
      <a href="/#certs" className="hover:text-surface" onClick={onLinkClick}>Certifications</a>
    </nav>
  );
}

export default function Header(): JSX.Element {
  const [burgerMenuOpen, burgerMenuSetOpen] = useState(false);

  return (
    <>
      <header
        id="navbar"
        className="sticky top-0 z-50 w-full bg-accent p-2 flex justify-center"
      >
        <div className="w-full max-w-6xl flex items-center relative">
          {/* Logo */}
          <a href="/#home" className="lg:px-4 shrink-0">
            <Icon
              Svg={IconPersonal}
              paintClassName="text-content hover:text-surface !w-8 !h-8"
            />
          </a>

          {/* Navigation */}
          <Navigation className="hidden sm:flex flex-row"/>

          {/* Hamburger (Mobile) */}
          <button
            className="absolute right-0 visible sm:hidden"
            aria-label="Open menu"
            onClick={() => burgerMenuSetOpen((o) => !o)}
          >
            <Icon
              Svg={burgerMenuOpen ? IconCross : IconHamburger}
              paintClassName="text-content hover:text-surface !w-8 !h-8"
            />
          </button>
        </div>
      </header>
      {burgerMenuOpen && (
        <div className="fixed top-[48px] z-[1000] w-full h-full flex flex-row">
          <div className="min-w-[40vw] bg-surface/80" onClick={() => burgerMenuSetOpen((o) => !o)}/>
		  <Navigation className="w-full h-full flex flex-col bg-accent p-2 shadow-xl" onLinkClick={() => burgerMenuSetOpen(false)}/>
        </div>
      )}
    </>
  );
}
