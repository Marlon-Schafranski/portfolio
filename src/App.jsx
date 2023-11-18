import About from "./components/About/about";
import Know from "./components/Know/know";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Know/>
    </div>
  );
}

export default App;
