import gsap from "gsap";
import { useFade } from "./helpers/useFade";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Contacts = () => {
  useFade("#contactsText");

  useGSAP(() => {
    gsap.from("#moon", {
      x: 200,
      rotate: 90,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: "#moon",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="contactsSection"
      className="flex justify-between sm:items-center pl-5 sm:pl-8 lg:pl-20 overflow-x-clip"
    >
      <div id="contactsText" className="flex flex-col gap-8 sm:max-w-[43vw]">
        <h2 className="text-[40px] lg:text-5xl font-title">
          Join our community
        </h2>

        <p>
          Join us on our mission to to the moon & revolutionize open source AI
          development so that we can build a permissionless, democratized, and
          decentralized AI.
          <br /> <br />
          Let the fate of AI be in our hands and not that of big tech companies.
        </p>

        <div className="flex gap-8 justify-end sm:justify-start">
          <a
            href="https://web.telegram.org"
            aria-label="Telegram link"
            target="_blank"
            className="social-media--telegram w-11 h-11 lg:w-12  lg:h-12 bg-contain bg-no-repeat"
          />
          <a
            href="https://twitter.com"
            aria-label="Twitter link"
            target="_blank"
            className="social-media--twitter w-11 h-11 lg:w-12  lg:h-12 bg-contain bg-no-repeat"
          />
        </div>
      </div>

      <img
        id="moon"
        src="images/moon.webp"
        alt="moon image"
        className="w-[30vw] h-[30vw] object-contain pr-5 sm:pr-8 lg:pr-20"
      />
    </section>
  );
};
