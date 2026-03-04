import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Actualites from "./components/Actualité/Actualité.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";
import Navinfos from "./components/Navinfos/Navinfos.jsx";
import Navlogo from "./components/Navlogo/Navlogo.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navlogo />
      <Navinfos />
      <Navbar />
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

    <Footer />
  </div>;
};

export default App;