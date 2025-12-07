import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Services from "./pages/Services"; 
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
};

export default App;
