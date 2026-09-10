import { Cursor, Grain, Loader } from '@/components/Chrome';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { About, Clients, Contact, Strip, Ticker } from '@/components/Sections';
import Capabilities from '@/components/Capabilities';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Grain />
      <Cursor />
      <Loader />
      <Header />

      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <Strip />
        <Capabilities />
        <Services />
        <Stats />
        <Projects />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
