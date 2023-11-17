import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "tachyons";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function App() {
  //TSParticles Start
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  //TSParticles End
  
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        url="https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
