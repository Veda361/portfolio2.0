import Navbar from "./components/Navbar";
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Mac from "./pages/Mac";
import Android from "./pages/Android";
import Deviors from "./pages/Deviors";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/android" element={<Android />} />
        <Route path="/deviors" element={<Deviors />} />
      </Routes>
    </BrowserRouter>
  );
}
