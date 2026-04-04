import { Link } from "react-router-dom";
import LiquidEther from "./LiquidEther";
import TextType from "./TextType";
import { useState } from "react";

export default function Hero({ chevronLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Container */}
      <div className="w-full h-screen relative bg-black text-white">
        {/* background */}
        <LiquidEther
          colors={["#6C63FF", "#C77DFF", "#80D0FF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          autoResumeDelay={3000}
          takeoverDuration={0.25}
          autoRampDuration={0.6}
        ></LiquidEther>
        {/* content */}
        <div className="absolute top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
          <h1 className="font-extrabold text-6xl">Jamal Raja</h1>
          <TextType
            text={["Welcome to my portfolio", "Im a full stack developer"]}
            className="text-2xl"
            pauseDuration={3000}
          />
        </div>
        {/* chevron down */}
        <a href={chevronLink}>
          <svg
            className="w-[50px] h-[50px] fill-white absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce cursor-pointer"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </a>
      </div>
      {/* Link to test Github */}
      <Link
        to="https://github.com/Jamal-Raja"
        target="_blank"
        className="text-white hover:scale-105 active:scale-95 inline-flex items-center gap-2 absolute left-0 bottom-0 m-4 transition-transform"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Github Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="16"
          // height="16"
          viewBox="0 0 16 16"
          className="w-10 fill-[#8e8e8e]"
          fill="#8e8e8e"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>

        <span
          className={`text-2xl  rounded-md px-2 transition-all duration-200 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
        >
          Github Profile
        </span>
      </Link>
    </>
  );
}
