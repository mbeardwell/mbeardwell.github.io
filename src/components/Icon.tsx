import { SVG } from "src/globals";

interface IconProps {
    Svg: SVG;
    paintClassName: string;
}

export default function Icon({ Svg, paintClassName: paintClass }: IconProps) {
    return (
        <div className={`w-6 h-6 p-[0.1rem] align-middle ${paintClass}`}>
            <Svg />
        </div>
    );
}
