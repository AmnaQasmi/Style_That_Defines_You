import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Chatbot from './components/Chatbot';
import CookiePolicy from './components/CookiePolicy';
import Footer from './components/Footer';

function App() {
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowCookiePolicy(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookiePolicy(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Booking />
      <Contact />
      <Footer />
      <Chatbot />
      {showCookiePolicy && (
        <CookiePolicy onAccept={handleAcceptCookies} />
      )}
    </div>
  );
}

export default App;