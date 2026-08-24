import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoverText, setHoverText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverData = target.closest("[data-hover]")?.getAttribute("data-hover");
      
      if (hoverData) {
        setHoverText(hoverData);
        setIsHovered(true);
      } else if (target.closest("a, button, input, textarea")) {
        setHoverText("");
        setIsHovered(true);
      } else {
        setHoverText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 z-[100] pointer-events-none flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out font-mono text-[10px] uppercase font-bold tracking-wider",
        isHovered
          ? "w-20 h-20 bg-[#f5f5f5] text-[#0a0a0a] mix-blend-normal"
          : "w-4 h-4 bg-[#f5f5f5] mix-blend-difference"
      )}
    >
      {isHovered && hoverText && <span className="absolute">{hoverText}</span>}
    </div>
  );
}
