import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Hair Cut',
    'Stylish Beard/Shave',
    'Dermacos Facial',
    'Wedding Package (₨10,999)',
    'Mehndi/Valima Package (₨10,499)',
    'Hair Expert Package (₨3,500)',
    'Other (Specify in message)'
  ];

  const timeSlots = [
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', 
    '9:00 PM', '10:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello! I would like to book an appointment at Sheikh Sahab Barber Point.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Additional Message: ${formData.message}

Please confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/923130103399?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your grooming session with us. We'll confirm your appointment via WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Appointment Details</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <User size={18} className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Phone size={18} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Calendar size={18} className="inline mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Clock size={18} className="inline mr-2" />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <MessageSquare size={18} className="inline mr-2" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Any special requests or additional information..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-black py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors"
                >
                  Book via WhatsApp
                </button>
              </form>
            </div>

            {/* Quick Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Booking</h3>
                <p className="text-gray-600 mb-6">
                  For immediate booking or inquiries, contact us directly:
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+923130103399"
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <Phone className="text-green-600" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Call Now</div>
                      <div className="text-green-600">+92 313 0103399</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/923130103399"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageSquare className="text-green-600" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">WhatsApp</div>
                      <div className="text-green-600">+92 313 0103399</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-amber-500 rounded-2xl shadow-lg p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tuesday - Sunday</span>
                    <span className="font-semibold">1:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span className="font-semibold text-red-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;