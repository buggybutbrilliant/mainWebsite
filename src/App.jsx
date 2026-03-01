import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import BrandStatement from './components/BrandStatement';
import ServicesSelector from './components/Services/ServicesSelector';
import Process from './components/Process';
import Stack from './components/Stack';
import CTA from './components/CTA';
import Footer from './components/Layout/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <ServicesSelector />
        <Process />
        <Stack />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
