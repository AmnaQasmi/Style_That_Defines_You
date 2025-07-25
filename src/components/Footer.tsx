
import { MapPin, Phone, Youtube, Instagram, Facebook, Music2 } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo-.png" 
                alt="Sheikh Sahab Barber Point" 
                className="h-12 w-12 rounded-full border-2 border-amber-500"
              />
              <div>
                <h3 className="text-xl font-bold">Sheikh Sahab</h3>
                <p className="text-amber-500">Barber Point</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              "Style That Defines You" - Premium grooming services in the heart of Karachi.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.youtube.com/@SheikhSahabBarberpoint" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.instagram.com/sheikhsahab.official54" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61574991826987" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@sheikhsahabbarberpoint54" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Booking
                </button>
              </li>
               <li>
                <button 
                  onClick={() => scrollToSection('location')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Location
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 hover:text-amber-500 transition-colors">
              <li>Hair Cut & Styling</li>
              <li>Beard Trimming</li>
              <li>Facial Treatments</li>
              <li>Wedding Packages</li>
              <li>Manicure & Pedicure</li>
              <li>Complete Grooming</li>
              <li>Home Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="text-amber-500 mt-1" size={16} />
                <div className="text-gray-400 text-sm">
                  {/* House No. 22, Shop No. 5-4<br />
                  Behind Lee Broast, Sweet Homeland<br />
                  Model Colony, Karachi */}
                <li>
                  <a href="https://maps.app.goo.gl/QuTphKGoLeJkoJ2e6" target="_blank" className='hover:text-amber-500 transition-colors'>
                   House No. 22, Shop No. 5-4<br />
                  Behind Lee Broast, Sweet Homeland<br />
                  Model Colony, Karachi
                  </a>
                </li>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-amber-500" size={16} />
                <a 
                  href="tel:+923130103399" 
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  +92 313 0103399
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                Open: Tue-Sun 1:00 PM - 11:00 PM<br />
                Closed Monday
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sheikh Sahab Barber Point. All rights reserved. | "Style That Defines You"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;