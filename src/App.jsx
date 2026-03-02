import "./App.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/services/Services.jsx";
import Actualites from "./components/actualité/Actualité.jsx";
import Projects from "./components/projects/Projects.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Navinfos from "./components/navinfos/Navinfos.jsx";
import Navlogo from "./components/navlogo/Navlogo.jsx";

const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      {/* <Sidebar /> */}
      <Navlogo />
      <Navinfos />
      <Navbar />
      <Hero />
      {/* <Sidebar /> */}
    </section>

    <section id="Services">
      <Services />
    </section>

    <section id="Projects">
      <Projects />
    </section>

    <section id="About">
      <About />
    </section>

    <section id="Actualités">
      <Actualites />
    </section>

    <section id="Contact">
      <Contact />
    </section>
  

    {/* <section id="Actualité">
      <Parallax type="about" />
    </section>
    <section>
      <About />
    </section> */}

  </div>;
};

export default App;
