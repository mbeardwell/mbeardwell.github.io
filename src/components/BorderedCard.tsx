import { JSX } from "react";

interface BorderedCardProps {
    className: string;
    children: React.ReactNode;
}

export default function BorderedCard({ className, children } : BorderedCardProps): JSX.Element {
    return (
        <div className={`border-content border-[3px] rounded-lg bg-accent ${className}`}>
            {children}
        </div>
    );
}
