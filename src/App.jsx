import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Hero chevronLink="#About"></Hero>
      <About></About>
      {/* <div className="bg-amber-300 h-screen"></div> */}
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
