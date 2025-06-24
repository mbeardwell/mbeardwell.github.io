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

export default function Button({ href, text, Svg, paintTypes }: ButtonProps): JSX.Element {
    const iconClassName = paintTypes?.map((str) => str+"-content").join(" ");
    const iconHoverClassName = paintTypes?.map((str) => "hover:"+str+"-accent").join(" ");
    
    const aClass: string = `
        inline-flex items-center w-fit
        transition duration-250 ease-(--button-ease)
        bg-accent border-accent border-[2px] rounded-lg
        ${BTN_PAD_Y} ${text ? BTN_PAD_X_ICON_WITH_TEXT : BTN_PAD_X_ICON_ONLY}
        font-bold text-md md:text-md
        hover:bg-surface hover:text-accent
        ${iconClassName}
        ${iconHoverClassName}
    `;

    return (
        <a href={href} className={aClass} target="_blank">
            {Icon && <Icon Svg={Svg as SVG} paintClassName="" />}
            {text && <span className="ml-2 whitespace-nowrap">{text}</span>}
        </a>
    );
}
