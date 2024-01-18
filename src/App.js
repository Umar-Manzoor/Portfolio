import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import Profile from "./sections/Profile";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav1/>
      <Nav2/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
