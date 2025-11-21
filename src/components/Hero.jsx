import { Link } from "react-router-dom";
import LiquidEther from "./LiquidEther";
import TextType from "./TextType";
import DecryptedText from "./DecryptedText";

export default function Hero({ chevronLink }) {
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
      {/* Link to test page */}
      <Link
        to="/test"
        className="text-white underline hover:scale-105 active:scale-95 block w-min absolute left-0 bottom-0 m-4"
      >
        <svg class="w-5 fill-[#8e8e8e]" viewBox="0 0 384 512">
          <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"></path>
        </svg>
      </Link>
    </>
  );
}
