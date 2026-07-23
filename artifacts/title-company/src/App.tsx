import './index.css';

import Navbar from './site/Navbar';
import Hero from './site/Hero';
import TrustBar from './site/TrustBar';
import Services from './site/Services';
import WhyChoose from './site/WhyChoose';
import About from './site/About';
import Locations from './site/Locations';
import Contact from './site/Contact';
import Footer from './site/Footer';
import BackToTop from './site/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChoose />
        <About />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
