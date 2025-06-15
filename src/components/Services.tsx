
import { Scissors, Sparkles, Droplets, Hand, Heart, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="text-amber-500" size={32} />,
      title: "Hair Cut",
      description: "Professional styling and cutting for all hair types"
    },
    {
      icon: <Crown className="text-amber-500" size={32} />,
      title: "Stylish Beard / Shave",
      description: "Expert beard trimming and classic shaving services"
    },
    {
      icon: <Sparkles className="text-amber-500" size={32} />,
      title: "Dermacos Facial",
      description: "Premium facial treatments for healthy, glowing skin"
    },
    {
      icon: <Droplets className="text-amber-500" size={32} />,
      title: "Hexagonal Cleanser",
      description: "Deep cleansing treatment for refreshed skin"
    },
    {
      icon: <Heart className="text-amber-500" size={32} />,
      title: "Guava Glow Scrub + Grey Cream",
      description: "Exfoliating scrub with nourishing cream treatment"
    },
    {
      icon: <Hand className="text-amber-500" size={32} />,
      title: "Blackheads Removal",
      description: "Professional extraction for clear, smooth skin"
    }
  ];

  const packages = [
    {
      title: "Wedding Package",
      price: "₨ 11,999",
      description: "Complete grooming for your special day",
      features: [
        "Hair Cut & Styling",
        "Stylish Beard/Shave",
        "Dermacos Facial",
        "Hexagonal Cleanser",
        "Guava Glow Scrub + Grey Cream",
        "Blackheads Removal",
        "Neck Whitening",
        "Manicure + Pedicure",
        "Hair Wash + Hair Styling",
        "Makeup + Dress Setting"
      ],
      popular: true
    },
    {
      title: "Mehndi/Valima Package",
      price: "₨ 10,499",
      description: "Complete skincare & styling makeover",
      features: [
        "Hair Cut & Stylish Beard/Shave",
        "CUTE PLUS Facial",
        "Brightening Cleanser",
        "Intensive Scrub",
        "Aloe & Lemon Skin Polish",
        "Brightening Face Freshener",
        "Saffron Skin Glow Cream",
        "Rice Clay Mask",
        "Manicure + Pedicure + Hair Wash",
        "Hair Styling + Makeup"
      ],
      popular: false
    },
    {
      title: "Hair Expert Package",
      price: "₨ 3,500",
      description: "Advanced hair treatment & styling",
      features: [
        "Hair Cut Expert",
        "Shave/Beard Stylish",
        "Baremod Rebounding/Keratin",
        "Advanced Silk Ceramic Straightening",
        "Hair Wash",
        "Hair Styling",
        "5 inch Length (Atlas Long Hair Package)",
        "1 inch including price 600 Hundred"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class grooming services designed to make you look and feel your best
          </p>
        </div>

        {/* Individual Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Packages */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Special Packages
          </h3>
          <p className="text-lg text-gray-600">
            Complete grooming solutions for every occasion
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 ${
                pkg.popular ? 'border-amber-500' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-amber-500 text-black text-center py-2 font-bold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h4>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-amber-500 mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                    pkg.popular 
                      ? 'bg-amber-500 text-black hover:bg-amber-400' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;