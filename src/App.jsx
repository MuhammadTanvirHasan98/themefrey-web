import ClientReviewSection from "./ClientSection/ClientReviewSection";
import ContactSection from "./ContectSection/ContectSection";
import Footer from "./FooterSection/Footer";

function App() {
  return (
    <>
    <div>
       <header>
           {/* Navabr will be placed here */}
       </header>

        <main>
          {/* Main all components will be placed here */}
        </main>

        <footer>
         {/* Footer will be placed here */}
         <ClientReviewSection/>
         <ContactSection/>
        <Footer/>
        </footer>
      </div>
    </>
  );
}

export default App;
