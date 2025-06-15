
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="text-amber-500" size={32} />,
      number: "1000+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="text-amber-500" size={32} />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <Star className="text-amber-500" size={32} />,
      number: "4.9",
      label: "Average Rating"
    },
    {
      icon: <Clock className="text-amber-500" size={32} />,
      number: "10",
      label: "Hours Daily"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Sheikh Sahab Barber Point
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Model Colony, Karachi, Sheikh Sahab Barber Point has been 
              setting the standard for premium grooming services. Our motto "Style That Defines You" 
              reflects our commitment to helping every client look and feel their absolute best.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in complete grooming solutions, from classic haircuts and beard styling 
              to premium facial treatments and wedding packages. Our professional team focuses on 
              your complete get-up to ensure you look your absolute best on your big day!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional and experienced barbers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Premium quality products and equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Hygienic and comfortable environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Affordable pricing with premium service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Convenient location in Model Colony</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Open daily 1 PM - 11 PM (Closed Monday)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;