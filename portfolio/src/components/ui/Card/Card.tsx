import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function Card({ children, className = "", ...props }: CardProps) {
    return (
        <div className={`card-shell ${className}`.trim()} {...props}>
            {children}
        </div>
    );
}
