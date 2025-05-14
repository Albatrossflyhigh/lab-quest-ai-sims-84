
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useSoundEffect } from "@/hooks/use-sound-effect";

const glassCardVariants = cva(
  "relative rounded-2xl overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white/5 backdrop-blur-md border border-white/10",
        dark: "bg-black/30 backdrop-blur-md border border-white/5",
        colored: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20",
        neon: "bg-black/20 backdrop-blur-md border border-neon-cyan/30",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20",
        glow: "hover:shadow-lg hover:shadow-neon-cyan/30 hover:border-neon-cyan/50",
        scale: "hover:scale-[1.02]",
        flip: "hover:rotate-y-180 perspective-1000",
      },
      animation: {
        none: "",
        pulse: "animate-pulse-subtle",
        floating: "animate-floating-3d",
        flicker: "animate-hologram-flicker",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-12",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
      animation: "none",
      padding: "md",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  soundOnHover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, hover, animation, padding, soundOnHover = true, children, ...props }, ref) => {
    const { playSound } = useSoundEffect();
    
    const handleMouseEnter = React.useCallback(() => {
      if (soundOnHover) {
        playSound("hover");
      }
    }, [playSound, soundOnHover]);

    return (
      <div
        className={cn(
          glassCardVariants({ variant, hover, animation, padding }),
          className
        )}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };
