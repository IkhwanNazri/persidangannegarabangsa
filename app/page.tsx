import Navbar from "./components/TopNavbar";
import Hero from "./components/Hero";
import MengenaiDialog from "./components/MengenaiDialog";
import AturCara from "./components/AturCara";
import RSVP from "./components/RSVP";
import Panel from "./components/Panel";
import RakanPenaja from "./components/RakanPenaja";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="mengenai">
          <MengenaiDialog />
        </section>

        <section id="aturcara">
          <AturCara />
        </section>
        <section id="panel">
          <Panel />
        </section>

        <RSVP />
        <section id="rakan">
          <RakanPenaja />
        </section>
        <Footer/>

      </main>
    </>
  );
}