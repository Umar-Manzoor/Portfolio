import Nav from "./Nav";
import Profile from "./sections/Profile";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Profile/>
      <Experience/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
