
import { Scissors, Star, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-amber-500">
          <Scissors size={40} className="rotate-45" />
        </div>
        <div className="absolute top-40 right-20 text-amber-500">
          <Scissors size={30} className="rotate-12" />
        </div>
        <div className="absolute bottom-40 left-20 text-amber-500">
          <Scissors size={35} className="-rotate-45" />
        </div>
        <div className="absolute bottom-20 right-10 text-amber-500">
          <Scissors size={25} className="rotate-90" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Star className="text-amber-500" size={20} />
              <span className="text-amber-500 font-semibold">Premium Grooming Experience</span>
              <Star className="text-amber-500" size={20} />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sheikh Sahab
              <span className="block text-amber-500">Barber Point</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              "Style That Defines You" - Experience the finest grooming services in Karachi. 
              From classic cuts to modern styling, we ensure you look your absolute best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={scrollToBooking}
                className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Appointment
              </button>
              <a 
                href="tel:+923130103399"
                className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                Call Now
              </a>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-300">
                <MapPin size={16} className="text-amber-500" />
                <span>Model Colony, Karachi</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-300">
                <Clock size={16} className="text-amber-500" />
                <span>1 PM - 11 PM (Closed Monday)</span>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl"></div>
              <img 
                src="/logo-.png" 
                alt="Sheikh Sahab Barber Point Logo" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-contain rounded-full border-4 border-amber-500/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;