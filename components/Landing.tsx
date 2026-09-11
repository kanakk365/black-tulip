import { Cursor, Grain, Loader } from '@/components/Chrome';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { About, Clients, Contact, Strip, Ticker } from '@/components/Sections';
import Capabilities from '@/components/Capabilities';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ThemeBar from '@/components/ThemeBar';
import type { ThemeId } from '@/lib/themes';

/**
 * The whole landing page. `theme` swaps the palette by re-declaring the
 * design tokens on the wrapper; every descendant inherits them, including
 * the fixed-position header, loader and cursor.
 */
export default function Landing({ theme }: { theme?: ThemeId }) {
  return (
    <div className="site" data-theme={theme}>
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
      <ThemeBar current={theme} />
    </div>
  );
}
