import "./App.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Services from "./components/services/Services.jsx";
import Actualites from "./components/actualité/Actualité.jsx";
import Projects from "./components/projects/Projects.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Navinfos from "./components/navinfos/Navinfos.jsx";
import Navlogo from "./components/navlogo/Navlogo.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return <div>
    <Cursor />

    <div className="sticky-header">
      <Navlogo />
      <Navinfos />
      <Navbar />
    </div>

    <section id="Homepage">
      <Hero />
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

    <section id="Footer">
      <Footer />
    </section>
  </div>;
};

export default App;