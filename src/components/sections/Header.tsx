import { JSX, useState, useEffect } from "react";
import { useTheme } from "@hooks/useTheme";
import IconPersonal from "@icons/personal-logo.svg?react";
import IconHamburger from "@icons/hamburger.svg?react";
import IconCross from "@icons/cross.svg?react";
import Icon from "@components/Icon";

interface NavigationProps {
	className?: string;
	onLinkClick?: () => void;
	theme: "light" | "dark";
	toggle: () => void;
}

function Navigation({
	className = "",
	onLinkClick,
	theme,
	toggle,
}: NavigationProps): JSX.Element {
	return (
		<nav className={`ml-auto gap-6 ${className}`} aria-label="Main navigation">
			{[
				["#about", "About"],
				["#projects", "Projects"],
				["#certs", "Certifications"],
			].map(([href, label]) => (
				<a
					key={label}
					href={href}
					onClick={onLinkClick}
					className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--mu)] hover:text-content transition-colors duration-200 no-underline"
				>
					{label}
				</a>
			))}
			<button
				onClick={toggle}
				className="flex items-center gap-2 text-[11px] font-medium tracking-[0.08em] uppercase border border-[var(--bdH)] px-3 py-1.5 text-[var(--mu)] hover:text-content transition-colors duration-200"
				aria-label="Toggle colour scheme"
			>
				<span>{theme === "dark" ? "☀" : "🌙"}</span>
				<span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
			</button>
			<a
				href="/docs/cv/Matthew_Beardwell_CV.pdf"
				target="_blank"
				className="
          relative overflow-hidden
          text-[11px] font-medium tracking-[0.08em] uppercase
          text-content border border-[var(--bdH)] px-[18px] py-[7px]
          transition-colors duration-[280ms] no-underline
          hover:text-surface
          before:content-[''] before:absolute before:inset-0
          before:bg-accent before:translate-x-[-101%]
          before:transition-transform before:duration-[300ms] before:ease-[var(--button-ease)]
          before:z-[-1]
          hover:before:translate-x-0
        "
			>
				Download CV
			</a>
		</nav>
	);
}

export default function Header(): JSX.Element {
	const { theme, toggle } = useTheme();
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const fn = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", fn, { passive: true });
		return () => window.removeEventListener("scroll", fn);
	}, []);

	return (
		<>
			<header
				id="navbar"
				className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 max-md:px-6 transition-all duration-[350ms] ${
					scrolled
						? "py-[14px] border-b border-[var(--bd)] bg-surface/[0.88] backdrop-blur-[16px]"
						: "py-[14px] border-b border-transparent bg-transparent"
				}`}
			>
				<a href="#home" className="block leading-none no-underline shrink-0">
					<Icon
						Svg={IconPersonal}
						paintClassName="text-accent hover:text-content !w-[26px] !h-[26px] transition-colors duration-200"
					/>
				</a>
				<Navigation
					className="hidden sm:flex flex-row items-center"
					theme={theme}
					toggle={toggle}
				/>
				<button
					className="sm:hidden text-content hover:text-accent transition-colors"
					aria-label="Toggle menu"
					onClick={() => setMenuOpen((o) => !o)}
				>
					<Icon
						Svg={menuOpen ? IconCross : IconHamburger}
						paintClassName="text-content !w-7 !h-7"
					/>
				</button>
			</header>

			{menuOpen && (
				<div className="fixed top-0 inset-0 z-40 flex">
					<div
						className="flex-1 bg-surface/80"
						onClick={() => setMenuOpen(false)}
					/>
					<Navigation
						className="flex flex-col items-start justify-center w-[70vw] max-w-xs bg-surface border-l border-[var(--bd)] px-8 py-12"
						onLinkClick={() => setMenuOpen(false)}
						theme={theme}
						toggle={toggle}
					/>
				</div>
			)}
		</>
	);
}
