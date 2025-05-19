import { SVG } from "globals";
import { JSX } from "react";

const BTN_PAD_X_ICON_ONLY = "px-[0.1rem]";
const BTN_PAD_X_ICON_WITH_TEXT = "px-[0.5rem]";
const BTN_PAD_Y = "py-[0.1rem]";

interface ButtonProps {
    href: string;
    text?: string;
    Icon?: SVG;
    iconClassName?: string;
}

export default function Button({ href, text, Icon, iconClassName: paintClass }: ButtonProps): JSX.Element {
    const aClass: string = `
        inline-flex items-center w-fit
        transition duration-250 ease-(--button-ease)
        bg-accent border-accent border-[2px] rounded-lg
        ${BTN_PAD_Y} ${text ? BTN_PAD_X_ICON_WITH_TEXT : BTN_PAD_X_ICON_ONLY}
        text-content visited:text-content font-bold text-md md:text-md
        hover:bg-surface hover:text-accent
    `;

    const IconClass: string = `
        w-6 h-6 p-[0.1rem] align-middle
        ${text ? "mr-2" : ""}
        ${paintClass}
    `;

    return (
        <a href={href} className={aClass} target="_blank">
            {Icon && <Icon className={IconClass} />}
            {text && <span className="whitespace-nowrap">{text}</span>}
        </a>
    );
}
