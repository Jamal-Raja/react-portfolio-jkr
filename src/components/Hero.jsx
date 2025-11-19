import LiquidEther from "./LiquidEther";
import TextType from "./TextType";

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
        <div className="absolute top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
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
    </>
  );
}
