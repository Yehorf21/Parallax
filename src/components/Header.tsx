import { Button } from "./helpers/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: "1024px" });
  const widgetData = [
    {
      value: "1,873",
      text: "LLM models",
    },
    {
      value: "$326,734",
      text: "Paid to data scientists",
    },
    {
      value: "6,557",
      text: "Developers",
    },
  ];

  useGSAP(() => {
    gsap.to("#header-planet", {
      y: -500,
      ease: "none",
      scrollTrigger: {
        trigger: "#header-planet",
        start: "top 30%",
        endTrigger: "#leaderboardSection",
        end: "bottom top+=500",
        scrub: true,
        pin: true,
      },
    });

    gsap.to("#blue-vector", {
      y: -100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#blue-vector",
        start: "top top -= 100",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      "#widget",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: isDesktop ? 0.1 : 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: "#widget",
          start: "bottom bottom -= 100",
        },
      }
    );
  }, []);

  return (
    <section id="homeSection" className="flex flex-col gap-15 lg:gap-25">
      <nav className="flex gap-6 lg:gap-12 items-center self-center">
        <a
          href="#leaderboardSection"
          aria-label="scrolls to 'leaderboard' section"
          className="text-[18px] gradient-link"
        >
          LLM Leaderboard
        </a>

        <Button text="Buy Salt AI" customPadding="14px 28px" />
      </nav>

      <div className="flex flex-col gap-9 text-left sm:w-[70vw] lg:w-[80vw]">
        <h1 className="font-title gradient-title text-5xl sm:text-6xl lg:text-[92px] leading-none">
          A new economic primitive for funding decentralized AI
        </h1>

        <p className="text-[18px]">
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>

        <div className="flex gap-6">
          <Button text="Buy Salt AI" />

          <button
            aria-label="placeholder button"
            className="text-[18px] cursor-pointer gradient-link"
          >
            Try now
          </button>
        </div>
      </div>

      <div className="w-full flex lg:grid flex-col lg:grid-cols-3 items-center lg:items-start gap-8">
        {widgetData.map((widget) => (
          <div
            id="widget"
            className="flex flex-col items-center gap-5 w-[90vw] lg:w-auto max-w-[480px] lg:max-w-none p-8 gradient-widget rounded-full"
            key={widget.value}
          >
            <h3 className="text-4xl/[1] lg:text-[44px]/[1] font-bold">
              {widget.value}
            </h3>

            <p className="text-[16px]">{widget.text}</p>
          </div>
        ))}
      </div>

      <div
        id="header-planet"
        aria-label="parallax header planet image"
        className="absolute right-[20%] sm:right-0 top-0 sm:-top-[500px] -z-10 w-[80vw] sm:w-[45vw] h-[80vw] sm:h-[45vw] bg-contain bg-no-repeat header-planet"
      />
      <div
        id="blue-vector"
        aria-label="additional color vector blue"
        className="absolute left-0 sm:left-15 lg:left-30 top-0 -z-10 w-[70vw] max-w-[850px] h-[55vw] max-h-[600px] bg-contain bg-no-repeat extra-hue--blue opacity-85"
      />
      <div
        id="orange-vector"
        aria-label="additional color vector orange"
        className="absolute -left-[30px] lg:-left-[100px] top-[40%] sm:top-[30%] lg:top-[50%] -z-10 w-[65vw] h-[65vw] bg-contain bg-no-repeat extra-hue--orange"
      />
    </section>
  );
};
