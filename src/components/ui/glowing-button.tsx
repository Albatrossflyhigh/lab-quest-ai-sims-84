
import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { useSoundEffect } from "@/hooks/use-sound-effect";

const glowingButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-transparent",
        cyan: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-transparent",
        neon: "bg-black/20 border border-neon-cyan text-white backdrop-blur-md",
        outline: "bg-black/20 border border-white/30 text-white backdrop-blur-md hover:border-white/50",
        ghost: "bg-transparent hover:bg-white/5 text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
      },
      glow: {
        default: "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-blue-600/50 before:to-purple-600/50 before:opacity-0 before:blur-xl before:transition-opacity before:duration-500 hover:before:opacity-100",
        cyan: "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-cyan-500/50 before:to-blue-600/50 before:opacity-0 before:blur-xl before:transition-opacity before:duration-500 hover:before:opacity-100",
        neon: "before:absolute before:inset-0 before:rounded-md before:bg-neon-cyan/30 before:opacity-0 before:blur-xl before:transition-opacity before:duration-500 hover:before:opacity-100",
        none: "",
      },
      animation: {
        none: "",
        pulse: "animate-neon-pulse",
        bounce: "hover:animate-bounce-subtle",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "default",
      animation: "none",
    },
  }
);

export interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glowingButtonVariants> {
  asChild?: boolean;
}

const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, variant, size, glow, animation, asChild = false, children, ...props }, ref) => {
    const { playSound } = useSoundEffect();
    
    const handleMouseEnter = React.useCallback(() => {
      playSound("hover");
    }, [playSound]);

    const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      playSound("click");
      if (props.onClick) {
        props.onClick(e);
      }
    }, [playSound, props]);

    return (
      <button
        className={cn(
          glowingButtonVariants({ variant, size, glow, animation }),
          className
        )}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
GlowingButton.displayName = "GlowingButton";

export { GlowingButton, glowingButtonVariants };
