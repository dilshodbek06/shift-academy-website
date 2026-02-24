import * as React from "react"
import { cn } from "@/lib/utils"

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "center" | "bottom" | "custom";
}

export const Glow = ({ className, position = "custom", ...props }: GlowProps) => {
  const positioning = {
    top: "top-[-10%] left-1/2 -translate-x-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-[-10%] left-1/2 -translate-x-1/2",
    custom: ""
  }[position];

  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] opacity-20 blur-[100px] bg-brand rounded-full",
        positioning,
        className
      )}
      {...props}
    />
  )
}
