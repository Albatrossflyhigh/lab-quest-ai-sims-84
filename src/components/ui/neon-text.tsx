
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const neonTextVariants = cva(
  "font-tech tracking-wide",
  {
    variants: {
      variant: {
        default: "text-white",
        blue: "text-neon-blue",
        cyan: "text-neon-cyan",
        purple: "text-neon-purple",
        pink: "text-neon-pink",
        green: "text-neon-green",
        gradient: "bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent",
      },
      glow: {
        none: "",
        sm: "drop-shadow-[0_0_2px_rgba(62,210,248,0.6)]",
        md: "drop-shadow-[0_0_4px_rgba(62,210,248,0.6)]",
        lg: "drop-shadow-[0_0_8px_rgba(62,210,248,0.6)]",
        xl: "drop-shadow-[0_0_12px_rgba(62,210,248,0.6)]",
      },
      animation: {
        none: "",
        flicker: "animate-electric-flicker",
        pulse: "animate-neon-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
      glow: "md",
      animation: "none",
    },
  }
);

export interface NeonTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neonTextVariants> {
  as?: React.ElementType;
}

const NeonText = React.forwardRef<HTMLDivElement, NeonTextProps>(
  ({ className, variant, glow, animation, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        className={cn(
          neonTextVariants({ variant, glow, animation }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
NeonText.displayName = "NeonText";

export { NeonText, neonTextVariants };
