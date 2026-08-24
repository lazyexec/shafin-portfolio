import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { siteData } from "../data";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    const percentTarget = { val: 0 };

    tl.to(percentTarget, {
      val: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.innerText = Math.round(percentTarget.val).toString();
        }
      },
    })
    .to(lineRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }, "<")
    .to([textRef.current, lineRef.current], {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      stagger: 0.1,
    }, "+=0.2")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-[#f5f5f5]"
    >
      <div ref={textRef} className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase">
          {siteData.basicInfo.shortName}
        </h1>
        <div className="font-mono text-sm tracking-widest text-[#a3a3a3]">
          LOADING <span ref={percentRef}>0</span>%
        </div>
      </div>
      <div className="absolute bottom-10 left-10 right-10 h-[1px] bg-[#2e2e2e] origin-left overflow-hidden">
        <div ref={lineRef} className="h-full w-full bg-[#f5f5f5] origin-left scale-x-0" />
      </div>
    </div>
  );
}
