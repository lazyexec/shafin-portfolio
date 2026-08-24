import React, { useRef, useState } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".edu-row", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="education" ref={containerRef} className="py-20 px-6 md:px-10 max-w-[1400px] mx-auto border-b border-[#2e2e2e]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         <div className="lg:col-span-3 font-mono text-xs tracking-widest uppercase text-[#737373]">
          ( Education )
        </div>
        <div className="lg:col-span-9">
          {siteData.education.map((edu, i) => (
            <EduRow key={i} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

const EduRow: React.FC<{ edu: typeof siteData.education[0] }> = ({ edu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <div className="edu-row border-t border-[#2e2e2e] py-6 cursor-pointer group" onClick={() => setIsOpen(!isOpen)} data-hover="VIEW">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:italic transition-all">{edu.credential}</h3>
          <p className="text-[#a3a3a3] mt-1">{edu.institution}</p>
        </div>
        <div className="font-mono text-xs text-[#737373] text-left md:text-right flex flex-col gap-1">
          <span>{edu.period}</span>
          <span className="text-[#f5f5f5] bg-[#1a1a1a] px-2 py-1 inline-block w-fit mt-1">{edu.result}</span>
        </div>
      </div>
      
      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <div className="pt-4 pb-2">
          <p className="font-mono text-xs text-[#737373] uppercase tracking-widest">[ LOC: {edu.location} ]</p>
        </div>
      </div>
    </div>
  );
}
