import { JSX } from "react";

interface BorderedCardProps {
    className: string;
    children: React.ReactNode;
}

export default function BorderedCard({ className, children } : BorderedCardProps): JSX.Element {
    return (
        <div className={`border-content border-4 bg-accent/80 ${className}`}>
            {children}
        </div>
    );
}