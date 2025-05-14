
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TypewriterTextProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  text: string;
  delay?: number;
}

export function TypewriterText({ 
  as: Component = "div", 
  text, 
  delay = 1000, 
  className, 
  ...props 
}: TypewriterTextProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) {
    return <Component className={className} {...props}>&nbsp;</Component>;
  }

  return (
    <Component
      className={cn(
        "inline-block whitespace-nowrap overflow-hidden border-r-2 border-neon-cyan",
        "animate-typewriter after:animate-blink-cursor",
        className
      )}
      {...props}
    >
      {text}
    </Component>
  );
}
