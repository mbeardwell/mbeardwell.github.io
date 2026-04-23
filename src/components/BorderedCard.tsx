import { JSX } from "react";

interface BorderedCardProps {
	className: string;
	children: React.ReactNode;
}

export default function BorderedCard({
	className,
	children,
}: BorderedCardProps): JSX.Element {
	return (
		<div
			className={`border border-[var(--bd)] hover:border-[var(--bdH)] transition-colors duration-[220ms] ${className}`}
		>
			{children}
		</div>
	);
}
