import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import BrandStatement from './components/BrandStatement';
import About from './components/About/About';
import ServicesSelector from './components/Services/ServicesSelector';
import Process from './components/Process';
import Stack from './components/Stack';
import Creators from './components/Creators/Creators';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA';
import Legal from './components/Legal/Legal';
import Footer from './components/Layout/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';
import WhatsAppFAB from './components/UI/WhatsAppFAB';
import ScrollToTop from './components/UI/ScrollToTop';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <About />
        <ServicesSelector />
        <Process />
        <Stack />
        <Creators />
        <FAQ />
        <CTA />
        <Legal />
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppFAB />
      <ScrollToTop />
    </>
  );
}
