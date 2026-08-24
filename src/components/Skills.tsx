import React, { useRef } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".skill-col", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-32 px-6 md:px-10 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        
        <div className="skill-col">
          <h3 className="font-mono text-xs tracking-widest uppercase mb-10 text-[#737373] pb-4 border-b border-[#2e2e2e]">
            Frontend Architecture
          </h3>
          <ul className="space-y-0">
            {siteData.skills.frontend.map((skill) => (
              <SkillRow key={skill} name={skill} />
            ))}
          </ul>
        </div>

        <div className="skill-col">
          <h3 className="font-mono text-xs tracking-widest uppercase mb-10 text-[#737373] pb-4 border-b border-[#2e2e2e]">
            Backend & APIs
          </h3>
          <ul className="space-y-0">
            {siteData.skills.backend.map((skill) => (
              <SkillRow key={skill} name={skill} />
            ))}
          </ul>
        </div>

        <div className="skill-col">
          <h3 className="font-mono text-xs tracking-widest uppercase mb-10 text-[#737373] pb-4 border-b border-[#2e2e2e]">
            Cloud & Tools
          </h3>
          <ul className="space-y-0">
            {siteData.skills.cloudTools.map((skill) => (
              <SkillRow key={skill} name={skill} />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

const SkillRow: React.FC<{ name: string }> = ({ name }) => {
  return (
    <li className="relative py-3 group cursor-crosshair">
      <span className="text-xl md:text-2xl font-light tracking-tight group-hover:pl-4 transition-all duration-300">
        {name}
      </span>
      <div className="absolute bottom-0 left-0 h-[1px] bg-[#f5f5f5] w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </li>
  );
}
