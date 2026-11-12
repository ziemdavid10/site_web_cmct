import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { useI18n } from "../i18n/context.js";
import { PHOTOS } from "../data/site.js";
import { useSeo } from "./Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Hero from "../components/hero/Hero.jsx";
import Brands from "../components/navlogo/Navlogo.jsx";
import About from "../components/about/About.jsx";
import Organisation from "../components/organisation/Organisation.jsx";
import Expertises from "../components/services/Services.jsx";
import References from "../components/references/References.jsx";
import Projects from "../components/projects/Projects.jsx";
import Gallery from "../components/gallery/Gallery.jsx";
import Why from "../components/why/Why.jsx";
import Actualites from "../components/actualité/Actualité.jsx";
import Contact from "../components/contact/Contact.jsx";

// Page intérieure générique : en-tête photo + contenu
const InnerPage = ({ pageKey, photo, position, children }) => {
  const { t } = useI18n();
  const page = t.pages[pageKey];
  useSeo(pageKey);
  return (
    <>
      <PageHeader title={page.title} intro={page.intro} photo={photo} position={position} />
      {children}
    </>
  );
};

// Accueil : couverture, entités, expérience et références, expertises complémentaires, contact
export const HomePage = () => {
  useSeo("home");
  return (
    <>
      <section id="Homepage" data-nav-theme="dark">
        <Hero />
      </section>
      <Brands />
      <section id="References" className="section cream">
        <References />
      </section>
      <section id="Why" className="section">
        <Why />
      </section>
      <section id="Contact" className="section soft">
        <Contact />
      </section>
    </>
  );
};

export const AboutPage = () => (
  <InnerPage pageKey="about" photo={PHOTOS.pricnac} position="50% 35%">
    <section className="section">
      <About />
    </section>
  </InnerPage>
);

export const OrganisationPage = () => (
  <InnerPage pageKey="organisation" photo={PHOTOS.delegation} position="50% 40%">
    <section className="section soft">
      <Organisation />
    </section>
  </InnerPage>
);

export const ExpertisesPage = () => (
  <InnerPage pageKey="expertises" photo={PHOTOS.interview} position="50% 45%">
    <section className="section dark" data-nav-theme="dark">
      <Expertises />
    </section>
  </InnerPage>
);

export const RealisationsPage = () => (
  <InnerPage pageKey="projects" photo={PHOTOS.dronePaysage} position="50% 60%">
    <section className="section">
      <Projects />
    </section>
  </InnerPage>
);

export const GalleryPage = () => (
  <InnerPage pageKey="gallery" photo={PHOTOS.camigraUe} position="50% 35%">
    <section className="section soft">
      <Gallery />
    </section>
  </InnerPage>
);

export const NewsPage = () => (
  <InnerPage pageKey="news" photo={PHOTOS.photographe} position="50% 30%">
    <section className="section soft">
      <Actualites />
    </section>
  </InnerPage>
);

export const ContactPage = () => (
  <InnerPage pageKey="contact" photo={PHOTOS.siege} position="50% 52%">
    <section className="section">
      <Contact />
    </section>
  </InnerPage>
);

export const NotFoundPage = () => {
  const { t } = useI18n();
  const nf = t.pages.notFound;
  useSeo("notFound", { noindex: true });
  return (
    <>
      <PageHeader title={nf.title} intro={nf.intro} photo={PHOTOS.dronePaysage} position="50% 60%" />
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <Link to="/" className="btn primary">
            <LuArrowLeft aria-hidden="true" /> {nf.cta}
          </Link>
        </div>
      </section>
    </>
  );
};
