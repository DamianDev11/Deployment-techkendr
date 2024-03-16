import BenefitSection from "./pages/BenefitsSection/BenefitSection";
import Footer from "./pages/Footer/Footer";
import Heading from "./pages/Heading/Heading";
import HeroSection from "./pages/HeroSection/HeroSection";
import InstructionSection from "./pages/InstructionSection/InstructionSection";
import PartnerSection from "./pages/PartnerSection/PartnerSection";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Heading />
      <HeroSection/>
      <InstructionSection/>
      <BenefitSection/>
      <PartnerSection/>
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;
