import "./App.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Projects from "./components/projects/Projects.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  return <div>
    <section id="Homepage">
      {/* <Sidebar /> */}
      <Navbar />
      <Hero />
      <Sidebar />
    </section>

    <section id="Services">
      <Parallax type="services" />
    </section>
    <section>
      <Services />
    </section>

    <section id="Projects">
      <Parallax type="projects" />
    </section>
    <section>
      <Projects />
    </section>

    <section id="About">
      <Parallax type="about" />
    </section>
    <section>
      <About />
    </section>

    <section id="Contact">
      <Parallax type="contact" />
    </section>
    <section>
      <Contact />
    </section>

  </div>;
};

export default App;
