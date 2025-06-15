
import { MapPin, Phone, MessageSquare, Youtube, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our location or reach out through any of our contact channels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      House No. 22, Shop No. 5-4<br />
                      Behind Lee Broast, Sweet Homeland<br />
                      Model Colony, Karachi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone & WhatsApp</h4>
                    <a 
                      href="tel:+923130103399" 
                      className="text-amber-500 hover:text-amber-600 transition-colors"
                    >
                      +92 313 0103399
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageSquare className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick Booking</h4>
                    <a 
                      href="https://wa.me/923130103399" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-600 transition-colors"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.youtube.com/@SheikhSahabBarberpoint" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Youtube size={20} />
                  <span>YouTube</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/sheikhsahab.official54" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/profile.php?id=61574991826987" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <div className="text-center text-black">
                <MapPin size={48} className="mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Visit Our Shop</h4>
                <p className="mb-2">Model Colony, Karachi</p>
                <p className="text-sm mb-4">Open: Tue-Sun 1PM-11PM | Closed Monday</p>
                <a 
                  href="https://maps.google.com/?q=House+No.+22,+Shop+No.+5-4,+behind+Lee+Broast,+Sweet+Homeland,+Model+Colony,+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;