import Experience from "./Components/Experience";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import Team from "./Components/Team";
import ThemeDemos from "./Components/ThemeDemos";
import ClientReviewSection from "./ClientSection/ClientReviewSection";
import ContactSection from "./ContectSection/ContectSection";
import FeatureSection from "./FeatureSection/Featuresection";
import Footer from "./FooterSection/Footer";

function App() {
  return (
    <>
      <div>
        <header>{/* Navabr will be placed here */}</header>

        <main className="space-y-20">
          <Services />
          <Experience />
          <Team />
          <ThemeDemos />
          <Pricing />
          <FeatureSection/>
          <ClientReviewSection/>
          <ContactSection/>
        </main>

   
        <footer>
         {/* Footer will be placed here */}
       
        <Footer/>
        </footer>
      </div>
    </>
  );
}

export default App;
