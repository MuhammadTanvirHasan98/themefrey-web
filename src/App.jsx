import Experience from "./Components/Experience";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import Team from "./Components/Team";
import ThemeDemos from "./Components/ThemeDemos";
import ClientReviewSection from "./ClientSection/ClientReviewSection";
import ContactSection from "./ContectSection/ContectSection";
import FeatureSection from "./FeatureSection/Featuresection";
import Footer from "./FooterSection/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Software from "./Components/Software";
import bg from "./assets/bg.png";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <div>
        <header>
          {/* Navabr will be placed here */}
          <Navbar />
        </header>

        <main
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover", // covers entire background
            backgroundPosition: "center", // centers the image
            backgroundRepeat: "no-repeat", // avoids repetition
            backgroundAttachment: "fixed", // keeps background fixed on scroll
          }}
          className="space-y-20 "
        >
          <Element name="home">
            <Hero />
          </Element>

          <Software />
          <Services />
          <div>
            <Experience />
            <Team />
          </div>

          <Element name="features">
            <FeatureSection />
          </Element>

          <Element name="demos">
            <ThemeDemos />
          </Element>
          <Element name="pricing">
            <Pricing />
          </Element>

          <ClientReviewSection />
          <Element name="contact">
            <ContactSection />
          </Element>
        </main>

        <footer>
          {/* Footer will be placed here */}

          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
