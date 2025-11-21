import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
}

export default App;
