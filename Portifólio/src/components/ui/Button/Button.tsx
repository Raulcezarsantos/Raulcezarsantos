import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
    return (
        <a className={`button button-${variant} ${className}`.trim()} {...props}>
            {children}
        </a>
    );
}
