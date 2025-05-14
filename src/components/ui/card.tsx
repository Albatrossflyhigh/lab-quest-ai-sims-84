
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// New futuristic card components
const NeonCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-black/40 backdrop-blur-xl text-white shadow-lg border-cyan-500/30 shadow-cyan-500/20",
      className
    )}
    {...props}
  />
))
NeonCard.displayName = "NeonCard"

const HologramCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg text-white relative overflow-hidden animate-hologram-flicker",
      className
    )}
    {...props}
  />
))
HologramCard.displayName = "HologramCard"

const GlowingCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    glowColor?: 'blue' | 'purple' | 'green' | 'cyan' | 'pink'
  }
>(({ className, glowColor = "cyan", ...props }, ref) => {
  const glowMap = {
    blue: "shadow-blue-500/30 border-blue-500/30",
    purple: "shadow-purple-500/30 border-purple-500/30",
    green: "shadow-green-500/30 border-green-500/30",
    cyan: "shadow-cyan-500/30 border-cyan-500/30",
    pink: "shadow-pink-500/30 border-pink-500/30",
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-black/30 backdrop-blur-lg text-white shadow-lg transition-all duration-300 hover:shadow-xl",
        glowMap[glowColor],
        className
      )}
      {...props}
    />
  )
})
GlowingCard.displayName = "GlowingCard"

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  NeonCard,
  HologramCard,
  GlowingCard
}
