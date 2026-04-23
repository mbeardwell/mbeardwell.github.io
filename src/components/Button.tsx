import Icon from "@components/Icon";
import { JSX } from "react";
import { SVG } from "src/globals";

const BTN_PAD_X_ICON_ONLY = "px-[0.1rem]";
const BTN_PAD_X_ICON_WITH_TEXT = "px-[0.5rem]";
const BTN_PAD_Y = "py-[0.1rem]";

interface ButtonProps {
	href: string;
	text?: string;
	Svg?: SVG;
	paintTypes?: string[];
}

export default function Button({
	href,
	text,
	Svg,
	paintTypes,
}: ButtonProps): JSX.Element {
	const iconClassName = paintTypes?.map((s) => `${s}-content`).join(" ");
	const iconHoverClassName = paintTypes
		?.map((s) => `hover:${s}-accent`)
		.join(" ");

	const aClass = `
        inline-flex items-center w-fit
        relative overflow-hidden
        transition-colors duration-[280ms] ease-[var(--button-ease)]
        border border-[var(--bdH)] rounded-none
        ${BTN_PAD_Y} ${text ? BTN_PAD_X_ICON_WITH_TEXT : BTN_PAD_X_ICON_ONLY}
        font-medium text-sm tracking-[0.08em] uppercase
        text-accent hover:text-surface
        ${iconClassName} ${iconHoverClassName}
        before:content-[''] before:absolute before:inset-0
        before:bg-accent before:translate-x-[-101%]
        before:transition-transform before:duration-[300ms] before:ease-[var(--button-ease)]
        before:z-[-1]
        hover:before:translate-x-0
    `;

	return (
		<a href={href} className={aClass} target="_blank">
			{Svg && <Icon Svg={Svg} paintClassName="w-6 h-6 relative z-[1]" />}
			{text && (
				<span className="ml-2 whitespace-nowrap relative z-[1]">{text}</span>
			)}
		</a>
	);
}
