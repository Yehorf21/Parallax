import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
  const links = ["Home", "Leaderboard", "About"];
  const details = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

  useGSAP(() => {
    gsap.fromTo(
      "#planet",
      {
        backgroundSize: "100%",
        backgroundPosition: "center center",
      },
      {
        backgroundSize: "130%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#planet",
          start: "top bottom",
          end: "top 10%",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col gap-6 padding-inline">
      <div className="flex gap-12 sm:gap-18 self-center pt-[300px]">
        {links.map((link) => (
          <a
            key={link}
            className="font-semibold gradient-link"
            href={"#" + link.toLowerCase() + "Section"}
            aria-label="scrolls to the respective section"
          >
            {link}
          </a>
        ))}
      </div>

      <hr id="divider" className="footer-color" />

      <div className="flex justify-between">
        <div className="flex gap-3 sm:gap-4">
          <a
            href="https://web.telegram.org"
            aria-label="Telegram link"
            target="_blank"
            className="social-media--telegram w-4 h-4 sm:w-6  sm:h-6 bg-contain bg-no-repeat"
          />
          <a
            href="https://twitter.com"
            aria-label="Twitter link"
            target="_blank"
            className="social-media--twitter w-4 h-4 sm:w-6  sm:h-6 bg-contain bg-no-repeat"
          />
        </div>

        <div className="flex gap-4 sm:gap-8">
          {details.map((detail) => (
            <a
              key={detail}
              href="https://example.com"
              className="footer-color text-[12px]"
              aria-label="placeholder link"
            >
              {detail}
            </a>
          ))}
        </div>
      </div>

      <div
        id="planet"
        aria-label="footer planet background image"
        className="absolute left-0 -z-10 footer-planet w-full h-[500px] bg-contain bg-center bg-no-repeat"
      />
    </section>
  );
};
