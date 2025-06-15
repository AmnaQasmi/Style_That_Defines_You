import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-amber-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo-.png" 
              alt="Sheikh Sahab Barber Point" 
              className="h-12 w-12 rounded-full border-2 border-amber-500"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Sheikh Sahab</h1>
              <p className="text-amber-500 text-sm">Barber Point</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-amber-500 transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-amber-500 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-amber-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('booking')} className="text-white hover:text-amber-500 transition-colors">Booking</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-amber-500 transition-colors">Contact</button>
          </nav>

          {/* Call Button */}
          <a 
            href="tel:+923130103399" 
            className="hidden md:flex items-center space-x-2 bg-amber-500 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors font-semibold"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-500/20 pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-500 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-amber-500 transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-amber-500 transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-amber-500 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('booking')} className="text-white hover:text-amber-500 transition-colors text-left">Booking</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-amber-500 transition-colors text-left">Contact</button>
              <a 
                href="tel:+923130103399" 
                className="flex items-center space-x-2 bg-amber-500 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors font-semibold w-fit"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;