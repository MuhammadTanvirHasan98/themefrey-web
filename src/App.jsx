import Experience from "./Components/Experience";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import Team from "./Components/Team";
import ThemeDemos from "./Components/ThemeDemos";

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
        </main>

        <footer>{/* Footer will be placed here */}</footer>
      </div>
    </>
  );
}

export default App;
