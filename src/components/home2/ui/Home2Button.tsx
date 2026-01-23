import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface Home2ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Home2Button = forwardRef<HTMLButtonElement, Home2ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded uppercase tracking-wider",
          // Size variants
          size === "sm" && "px-5 py-2.5 text-xs",
          size === "md" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-sm",
          // Style variants
          variant === "primary" && [
            "bg-[#D09947] text-[#000000]",
            "hover:bg-[#EEC569]",
            "active:bg-[#7F4D0F]",
          ],
          variant === "outline" && [
            "bg-transparent text-white",
            "border border-[#4A4A48]",
            "hover:border-[#D09947] hover:text-[#D09947]",
          ],
          variant === "ghost" && [
            "bg-transparent text-[#D09947]",
            "hover:bg-[#D09947]/10",
          ],
          className
        )}
        style={{ fontFamily: "var(--font-jakarta)" }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Home2Button.displayName = "Home2Button";
