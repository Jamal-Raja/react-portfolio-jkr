import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Hero chevronLink="#About" />
      <About />
      <Project />
    </>
  );
}

export default App;

/**  =================== TO DO ===================
 * - add project section __IN_PROGRESS⏳__
 * - animate about section text on scroll
 * - add contact section
 * - add easteregg 🐣
 */
