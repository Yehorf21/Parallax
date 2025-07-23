import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useFade } from "./helpers/useFade";

gsap.registerPlugin(ScrollTrigger);

export const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: "639px" });
  useFade("#scrollSection");

  const icons = ["slider-1", "slider-2", "slider-3", "slider-4", "slider-5"];

  useGSAP(() => {
    gsap.to("#scroller", {
      x: isMobile ? -1200 : -400,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#scroller",
        scrub: true,
        start: isMobile ? "top bottom" : "bottom bottom",
        end: "top top",
      },
    });
  }, []);

  return (
    <section id="scrollSection" className="flex flex-col gap-11">
      <h2 className="text-[40px] lg:text-5xl font-title text-center">
        Projects integrated into the Arrakis AI Ecosystem
      </h2>

      {/* we cancel out the default page padding for the scroller to work smoother */}
      <div className="w-[100vw] -mx-5 sm:-mx-8 lg:-mx-20 overflow-hidden">
        <ul
          id="scroller"
          className="flex items-center gap-30 px-5 sm:px-8 lg:px-20"
        >
          {/* duplicate the existing values */}
          {[...icons, ...icons].map((icon, i) => (
            <li
              key={icon + i.toString()}
              className={`${icon} bg-no-repeat bg-contain`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
