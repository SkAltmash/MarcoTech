import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
};

export default App;
