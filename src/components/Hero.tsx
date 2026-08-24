import React, { useRef } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroModel } from "./HeroModel";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 2.2 }); // Wait for preloader

    // Text reveal logic: Animate children spans directly
    if (titleRef.current) {
      tl.to(titleRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out",
      });
    }

    tl.fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(
      terminalRef.current,
      { scale: 0.9, opacity: 0, rotation: 5 },
      { scale: 1, opacity: 1, rotation: -2, duration: 1, ease: "back.out(1.5)" },
      "-=0.8"
    );
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 flex flex-col justify-center overflow-hidden">
      <HeroModel />
      
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="mb-6 font-mono text-xs tracking-widest uppercase flex items-center gap-3 text-[#a3a3a3]">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           {siteData.basicInfo.availability.split(';')[0]}
        </div>
        
        <h1 
          ref={titleRef}
          className="text-[12vw] leading-[0.9] font-bold tracking-tighter uppercase whitespace-nowrap overflow-hidden flex"
        >
          {"NABI SHAFIN".split("").map((char, i) => (
            <span 
              key={i} 
              className="inline-block opacity-0 translate-y-full" 
              dangerouslySetInnerHTML={{ __html: char === " " ? "&nbsp;" : char }} 
            />
          ))}
        </h1>
        
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 md:col-start-2">
            <div ref={subtitleRef} className="opacity-0">
              <p className="text-xl md:text-3xl font-light text-[#a3a3a3] leading-relaxed mb-10">
                {siteData.hero.mainTagline}
              </p>
              
              <div className="flex flex-col gap-8 font-mono text-xs tracking-widest text-[#a3a3a3]">
                <div className="flex flex-col gap-3">
                  <span className="uppercase text-[#737373]">[ Core Details ]</span>
                  <span>Email: <a href={`mailto:${siteData.basicInfo.email}`} className="text-[#f5f5f5] hover:underline" data-hover="EMAIL">{siteData.basicInfo.email}</a></span>
                  <span>Phone: <a href={`tel:${siteData.basicInfo.phoneCV}`} className="text-[#f5f5f5] hover:underline" data-hover="CALL">{siteData.basicInfo.phoneCV}</a></span>
                  <span>Loc: <span className="text-[#f5f5f5]">{siteData.basicInfo.location.split(' / ')[1]}</span></span>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-2">
                  <a href={siteData.basicInfo.resume} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-[#2e2e2e] rounded-full px-6 py-3 text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-colors" data-hover="DOWNLOAD">
                    GET RESUME
                  </a>
                  <a href={siteData.basicInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-[#2e2e2e] rounded-full px-6 py-3 text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-colors" data-hover="LINKEDIN">
                    LINKEDIN
                  </a>
                  <a href={siteData.basicInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-[#2e2e2e] rounded-full px-6 py-3 text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-colors" data-hover="GITHUB">
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 md:col-start-8 relative mt-10 md:mt-0">
            <div 
              ref={terminalRef}
              className="bg-[#1a1a1a] border border-[#2e2e2e] p-6 rounded-lg font-mono text-sm shadow-2xl absolute -top-20 right-0 md:-right-10 w-full max-w-sm opacity-0 rotate-2"
              data-hover="CODE"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#333]" />
                <div className="w-3 h-3 rounded-full bg-[#333]" />
                <div className="w-3 h-3 rounded-full bg-[#333]" />
              </div>
              <div className="text-[#a3a3a3]">
                <span className="text-[#737373]">// routine.js</span><br/>
                <span className="text-[#f5f5f5]">const</span> Routine = () ={">"} {"{"}<br/>
                &nbsp;&nbsp;console.log(<span className="text-[#f5f5f5]">"Eat"</span>);<br/>
                &nbsp;&nbsp;console.log(<span className="text-[#f5f5f5]">"Code"</span>);<br/>
                &nbsp;&nbsp;console.log(<span className="text-[#f5f5f5]">"Sleep"</span>);<br/>
                &nbsp;&nbsp;console.log(<span className="text-[#f5f5f5]">"Repeat()"</span>);<br/>
                {"}"}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-[#a3a3a3] font-mono text-xs leading-relaxed max-w-4xl border-t border-[#2e2e2e] pt-10">
          <div>
            <span className="block text-[#f5f5f5] mb-2 uppercase tracking-widest font-bold">01 / Teamwork</span>
            {siteData.hero.highlights.teamwork}
          </div>
          <div>
            <span className="block text-[#f5f5f5] mb-2 uppercase tracking-widest font-bold">02 / Learner</span>
            {siteData.hero.highlights.learner}
          </div>
        </div>
      </div>
    </section>
  );
}
