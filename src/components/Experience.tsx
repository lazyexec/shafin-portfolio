import React, { useState, useRef } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../lib/utils";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".exp-row", 
      { y: 50, opacity: 0 },
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
    <section id="experience" ref={containerRef} className="py-20 px-6 md:px-10 max-w-[1400px] mx-auto border-t border-[#2e2e2e]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
         <div className="lg:col-span-3 font-mono text-xs tracking-widest uppercase text-[#737373]">
          ( Experience )
        </div>
        <div className="lg:col-span-9">
          {siteData.experience.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceRow: React.FC<{ exp: typeof siteData.experience[0], index: number }> = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.4, ease: "power3.inOut" });
    }
  }, [isOpen]);

  return (
    <div className="exp-row border-b border-[#2e2e2e] py-8 cursor-pointer group" onClick={() => setIsOpen(!isOpen)} data-hover="VIEW">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter group-hover:italic transition-all">{exp.role}</h3>
          <p className="text-xl text-[#a3a3a3] mt-2">{exp.company}</p>
        </div>
        <div className="font-mono text-xs text-[#737373] text-left md:text-right flex flex-col gap-1">
          <span>{exp.duration}</span>
          <span>{exp.location}</span>
        </div>
      </div>
      
      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <div className="pt-8 pb-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-[#a3a3a3] mb-6 leading-relaxed">{exp.summary}</p>
            {exp.crossRoleDetails && (
              <ul className="list-[square] pl-4 text-sm text-[#737373] space-y-2 mb-6">
                {exp.crossRoleDetails.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4 text-[#f5f5f5]">Projects</h4>
            <div className="space-y-6">
              {exp.projects.map((proj, pIdx) => (
                <div key={pIdx}>
                  <p className="font-bold mb-2">{proj.name}</p>
                  <ul className="list-disc pl-4 text-sm text-[#737373] space-y-1">
                    {proj.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
