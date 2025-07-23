import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useFade = (id: string) => {
  useGSAP(() => {
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: id,
        start: "top bottom",
        end: 'top top',
        scrub: true,
        markers: false,
      }
    });
    
    sectionTl
      .fromTo(id, { opacity: .5, y: 100 }, { opacity: 1, y: 0, ease: "power1.inOut" })
      .to(id, { opacity: .9, y: 100, ease: "power1.inOut" });
  }, [id]);
};