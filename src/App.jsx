import Navbar from "./components/Navbar";
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Mac from "./pages/Mac";
import Android from "./pages/Android";
import Deviors from "./pages/Deviors";
// import AboutUS from "./pages/AboutUS";
// import Support from "./pages/Support";
// import TermsandCondition from "./pages/TermsandCondition";
// import Privacyandpolicy from "./pages/Privacyandpolicy";
// import PricingandRefund from "./pages/PricingandRefund";
// import SubmitProjects from "./pages/SubmitProjects";
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
        {/* <Route path="Aboutus" element={<AboutUS />} />
        <Route path="Support" element={<Support />} />
        <Route path="TermsandCondition" element={<TermsandCondition />} />
        <Route path="Privacyandpolicy" element={<Privacyandpolicy />} />
        <Route path="PricingandRefund" element={<PricingandRefund />} />
        <Route path="SubmitProjects" element={<SubmitProjects />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
