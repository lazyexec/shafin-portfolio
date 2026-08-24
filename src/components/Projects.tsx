import React, { useRef } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Only pin on screens larger than mobile
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 768px)", () => {
      panelsRef.current.forEach((panel, i) => {
        if (!panel) return;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "bottom top", // Add this to handle the pinning gracefully
        });

        // Content fade logic
        gsap.fromTo(
          panel.querySelector('.project-content'),
          { opacity: 0.2, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        );

        // Add fading out when scrolling past
        if (i < panelsRef.current.length - 1) {
            gsap.to(panel.querySelector('.project-content'), {
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: panel,
                    start: "bottom center",
                    end: "bottom top",
                    scrub: true,
                }
            })
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="relative z-10 bg-[#0a0a0a]">
      {siteData.projects.map((proj, i) => (
        <div 
          key={proj.id} 
          ref={(el) => { panelsRef.current[i] = el; }}
          className="panel relative w-full min-h-screen flex items-center justify-center border-t border-[#2e2e2e] bg-[#0a0a0a]"
        >
          <div className="project-content max-w-[1400px] w-full px-6 md:px-10 py-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3 font-mono text-xs tracking-widest uppercase text-[#737373]">
              [ {proj.id} / 0{siteData.projects.length} ]
            </div>
            
            <div className="lg:col-span-9">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 uppercase leading-none">
                {proj.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-16">
                <div>
                  <p className="text-xl md:text-2xl font-light text-[#a3a3a3] leading-relaxed">
                    {proj.description}
                  </p>
                </div>
                <div>
                  {proj.features.length > 0 && (
                    <ul className="list-[square] pl-4 text-sm text-[#737373] space-y-3 mb-10">
                      {proj.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-[#0a0a0a]">
                    {proj.tech.map((t) => (
                      <span key={t} className="bg-[#a3a3a3] px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {proj.url !== "#" && (
                <a 
                  href={proj.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 text-2xl font-bold uppercase tracking-widest group border-b-2 border-[#2e2e2e] pb-2 hover:border-[#f5f5f5] transition-colors"
                  data-hover="VISIT"
                >
                  Live Site
                  <span className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300">
                    &#8599;
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
