import React, { useRef } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.fromTo(textRef.current, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3 font-mono text-xs tracking-widest uppercase text-[#737373]">
          ( About )
        </div>
        
        <div className="lg:col-span-9">
          <p ref={textRef} className="text-2xl md:text-5xl leading-tight font-medium tracking-tight mb-20 first-letter:text-6xl md:first-letter:text-8xl first-letter:font-bold first-letter:text-[#f5f5f5] text-[#a3a3a3]">
            {siteData.about.summary1} {siteData.about.summary2}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 border-t border-[#2e2e2e] pt-10">
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4 text-[#f5f5f5]">Expertise</h3>
              <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed">
                {siteData.about.cards.expertise}
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4 text-[#f5f5f5]">Communication</h3>
              <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed">
                {siteData.about.cards.communication}
              </p>
            </div>
          </div>
          
          <div className="mt-20 font-mono text-xs tracking-widest uppercase text-[#737373] flex flex-wrap gap-6">
            <span>[ LOCATION: {siteData.basicInfo.location.split('(')[0].trim()} ]</span>
            <span>[ EMAIL: {siteData.basicInfo.email} ]</span>
            <span>[ STATUS: AVAILABLE ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
