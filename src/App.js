import BannerSection from "./components/BannerSection";
import AffiliateProgramSection from "./components/AffiliateProgramSection";
import CallToAction1 from "./components/CallToAction1";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <KeyFeaturesSection />
      <CallToAction1 />
      <BannerSection />
      <AffiliateProgramSection />
      <Footer />
    </>
  );
}

export default App;
