import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Mac from "./pages/Mac";
import Android from "./pages/Android";
import Deviors from "./pages/Deviors";
import Footer from "./components/Footer";

function AppLayout() {
  const location = useLocation();

  // hide footer on projects page
  const hideFooter = location.pathname === "/projects";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/android" element={<Android />} />
        <Route path="/deviors" element={<Deviors />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
