import About from "./components/About/about";
import Know from "./components/Know/know";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Project from "./components/project/Project";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Know/>
      <Project/>
      <Contact />
     

      
    </div>
  );
}

export default App;
