import React, { useRef } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const allSkills = [...siteData.skills.frontend, ...siteData.skills.backend];
  const marqueeText = allSkills.join(" \u00B7 ") + " \u00B7 ";

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    // Duplicate content for seamless loop
    const textWidth = textRef.current?.offsetWidth || 1000;
    
    tl.to(textRef.current, {
      x: -textWidth / 2,
      duration: 20,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        // Adjust timeScale based on scroll velocity
        const velocity = Math.abs(self.getVelocity());
        const scale = 1 + velocity / 500;
        gsap.to(tl, { timeScale: self.direction === 1 ? scale : -scale, duration: 0.2 });
      },
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-10 overflow-hidden border-y border-[#2e2e2e] bg-[#1a1a1a]" data-hover="DRAG">
      <div className="flex whitespace-nowrap opacity-50 font-bold text-4xl md:text-8xl tracking-tighter uppercase" ref={textRef}>
        {/* Render twice for seamless loop */}
        <span className="pr-4">{marqueeText}</span>
        <span className="pr-4">{marqueeText}</span>
        <span className="pr-4">{marqueeText}</span>
        <span className="pr-4">{marqueeText}</span>
      </div>
    </section>
  );
}
