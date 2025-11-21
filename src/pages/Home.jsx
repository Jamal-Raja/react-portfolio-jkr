import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import "aos/dist/aos.css";
import AOS from "aos";

function Home() {
  AOS.init();
  return (
    <>
      <Hero chevronLink="#About" />
      <About />
      <Project />
    </>
  );
}

export default Home;
