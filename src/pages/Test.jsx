import { Link } from "react-router-dom";

export default function Test() {
  return (
    <>
      <div className="text-white min-h-screen bg-black flex items-center justify-center flex-col gap-10">
        <h1 className="text-5xl">This is the Test Page</h1>
        <Link
          to="/"
          className="text-white underline hover:scale-105 active:scale-95"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}
