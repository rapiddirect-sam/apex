"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          variant === "primary" &&
            "bg-gold-primary text-apex-black hover:bg-gold-secondary hover:shadow-[0_0_15px_rgba(208,153,71,0.3)]",
          variant === "secondary" &&
            "bg-apex-gray text-apex-white hover:bg-apex-gray/80",
          variant === "outline" &&
            "border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-apex-black",
          variant === "ghost" && "text-gold-primary hover:bg-gold-primary/10",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
