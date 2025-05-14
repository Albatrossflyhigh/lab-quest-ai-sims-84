
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TypewriterTextProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  text: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({ 
  as: Component = "div", 
  text, 
  delay = 1000, 
  speed = 70,
  className, 
  ...props 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  React.useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);
    
    return () => clearTimeout(delayTimer);
  }, [delay]);
  
  React.useEffect(() => {
    if (!isTyping) return;
    
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTyping, text, speed]);

  return (
    <Component
      className={cn(
        "inline-block whitespace-pre-wrap",
        isTyping && currentIndex >= text.length ? "after:inline-block after:h-4 after:w-1 after:animate-blink after:bg-neon-cyan" : "",
        className
      )}
      {...props}
    >
      {displayText || (isTyping ? "" : "\u00A0")}
    </Component>
  );
}
