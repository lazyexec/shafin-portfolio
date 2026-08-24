import React, { useRef } from "react";
import { siteData } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 md:px-10 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
      <h2 
        ref={titleRef} 
        className="text-[15vw] leading-[0.8] font-bold tracking-tighter uppercase whitespace-nowrap overflow-hidden mb-20 text-center md:text-left"
      >
        Let's Talk
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <p className="text-xl md:text-3xl font-light text-[#a3a3a3] leading-relaxed mb-6">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase border border-[#2e2e2e] rounded-full px-4 py-2 text-[#f5f5f5]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Opportunities
            </div>
          </div>

          <div className="font-mono text-sm text-[#737373] space-y-4">
            <p className="text-[#f5f5f5] uppercase tracking-widest text-xs mb-2">Contact Info</p>
            <p>Name: {siteData.basicInfo.name}</p>
            <p>Email: {siteData.basicInfo.email}</p>
            <p>Phone: {siteData.basicInfo.phoneSite}</p>
            <p>Location: {siteData.basicInfo.location}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#2e2e2e] py-4 text-xl md:text-2xl text-[#f5f5f5] focus:outline-none focus:border-[#f5f5f5] transition-colors peer"
              />
              <label htmlFor="name" className="absolute left-0 top-4 text-xl md:text-2xl text-[#737373] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#f5f5f5] peer-focus:font-mono uppercase tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-mono peer-not-placeholder-shown:text-[#f5f5f5]">
                Full Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email"
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#2e2e2e] py-4 text-xl md:text-2xl text-[#f5f5f5] focus:outline-none focus:border-[#f5f5f5] transition-colors peer"
              />
              <label htmlFor="email" className="absolute left-0 top-4 text-xl md:text-2xl text-[#737373] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#f5f5f5] peer-focus:font-mono uppercase tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-mono peer-not-placeholder-shown:text-[#f5f5f5]">
                E-Mail Address
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message"
                rows={3}
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#2e2e2e] py-4 text-xl md:text-2xl text-[#f5f5f5] focus:outline-none focus:border-[#f5f5f5] transition-colors peer resize-none"
              />
              <label htmlFor="message" className="absolute left-0 top-4 text-xl md:text-2xl text-[#737373] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#f5f5f5] peer-focus:font-mono uppercase tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-mono peer-not-placeholder-shown:text-[#f5f5f5]">
                Message
              </label>
            </div>

            <div className="flex justify-start pt-8">
              <button 
                type="submit"
                className="w-32 h-32 rounded-full border border-[#f5f5f5] flex items-center justify-center uppercase font-bold tracking-widest text-sm hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-all duration-500 ease-out"
                data-hover="SEND"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
