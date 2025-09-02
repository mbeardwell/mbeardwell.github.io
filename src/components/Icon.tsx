import { SVG } from "src/globals";

interface IconProps {
    Svg: SVG;
    paintClassName: string;
}

export default function Icon({ Svg, paintClassName: paintClass }: IconProps) {
    return (
        <div className={`p-[0.1rem] inline-block ${paintClass}`}>
            <Svg className="w-full h-full"/>
        </div>
    );
}
