import React from "react";
import { siteData } from "../data";

export function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-[#2e2e2e] bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-mono text-xs tracking-widest uppercase text-[#737373] text-center md:text-left flex flex-col gap-2">
          <span>{siteData.basicInfo.email}</span>
          <span>Based in {siteData.basicInfo.location.split(',')[0]}</span>
          <span>Working Remotely Worldwide</span>
        </div>

        <div className="flex gap-6 font-mono text-xs tracking-widest uppercase text-[#f5f5f5]">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">Story</a>
          <a href="#projects" className="hover:underline">Portfolio</a>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs tracking-widest uppercase text-[#404040]">
        <p>© {new Date().getFullYear()} {siteData.basicInfo.name}. All rights reserved. Handcrafted with passion.</p>
        <p>Live Portfolio v2.0 — Let's go</p>
      </div>
    </footer>
  );
}
