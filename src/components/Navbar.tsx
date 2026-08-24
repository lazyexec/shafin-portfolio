import React, { useState, useRef, useEffect } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.3 }
      );
    } else {
      gsap.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  // Initial state setup for clipPath
  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-end p-6 md:p-10 mix-blend-difference text-[#f5f5f5]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 text-sm font-mono tracking-widest uppercase hover:opacity-70 transition-opacity"
          data-hover={isOpen ? "CLOSE" : "MENU"}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Full screen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-30 bg-[#f5f5f5] text-[#0a0a0a] flex flex-col justify-center px-10"
      >
        <ul className="flex flex-col gap-4 md:gap-8">
          {links.map((link, i) => (
            <li key={link.name} className="overflow-hidden">
              <a
                ref={(el) => { linksRef.current[i] = el; }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-5xl md:text-8xl font-bold tracking-tighter hover:italic transition-transform transform origin-left hover:translate-x-4"
                data-hover="GO"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-10 left-10 font-mono text-sm tracking-widest flex flex-col md:flex-row gap-4 md:gap-10 opacity-70">
          <a href={siteData.basicInfo.resume} target="_blank" rel="noreferrer" className="hover:underline">RESUME</a>
          <a href={siteData.basicInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LINKEDIN</a>
          <a href={siteData.basicInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GITHUB</a>
        </div>
      </div>
    </>
  );
}
