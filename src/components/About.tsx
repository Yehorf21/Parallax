import gsap from "gsap";
import { Button } from "./helpers/Button";
import { useFade } from "./helpers/useFade";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export const About = () => {
  useFade("#aboutSection");

  useGSAP(() => {
    const cometTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#comet",
        start: "top 50%",
        end: "top bottom",
        scrub: true,
      },
    });

    cometTl
      .fromTo("#comet", { opacity: 0 }, { opacity: 1, top: "0", right: "50%" })
      .to("#comet", { opacity: 0, top: "70%", right: "0" });
  }, {});

  return (
    <section id="aboutSection" className="relative flex flex-col gap-8">
      <h2 className="text-[40px]/tight lg:text-5xl/tight font-title max-w-[80vw] lg:max-w-[50vw]">
        Crowdsourcing our collective intelligence to build the best AI
      </h2>

      <p className="max-w-[70vw] lg:max-w-[60vw]">
        Open source AIs have been lagging in development behind OpenAI with
        billions of dollars.We run competitions between AI models to find and
        pay for the best AI model. Users will be able to access the best AI
        models.
      </p>

      <Button text="Use the cutting edge AI" />

      <div
        id="comet"
        aria-label="comet image"
        className="absolute -top-[70%] h-[75px] w-[130px] comet bg-contain bg-no-repeat -z-10"
      />
    </section>
  );
};
