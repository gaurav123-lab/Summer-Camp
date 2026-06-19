import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import Hero from "./components/Hero";
import WorkshopInfoCards from "./components/WorkshopInfoCards";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import TrustedSection from "./components/TrustedSection";
function App() {
  return <>
  
  <Navbar />
  <Hero />
  <WorkshopInfoCards />
  <LearningOutcomes />
  <FAQ/>
  <TrustedSection/>
  <Footer/>
  </>;
}
export default App;
