import React, { useState } from 'react';
import { MessageCircle, X, Send, MapPin, DollarSign, Calendar, Info } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! Welcome to Sheikh Sahab Barber Point. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    { icon: <MapPin size={16} />, text: 'Location', key: 'location' },
    { icon: <DollarSign size={16} />, text: 'Pricing', key: 'pricing' },
    { icon: <Calendar size={16} />, text: 'Booking', key: 'booking' },
    { icon: <Info size={16} />, text: 'Services', key: 'services' }
  ];

  const responses = {
    location: "📍 We're located at:\nHouse No. 22, Shop No. 5-4\nBehind Lee Broast, Sweet Homeland\nModel Colony, Karachi\n\n🕒 Open Hours:\nTuesday - Sunday: 1:00 PM - 11:00 PM\nMonday: Closed\n\nCall us: +92 313 0103399",
    
    pricing: "💰 Our Package Prices:\n\n🎩 Wedding Package: ₨11,999\n(Complete grooming for your special day)\n\n💒 Mehndi/Valima Package: ₨10,499\n(Complete skincare & styling makeover)\n\n✂️ Hair Expert Package: ₨3,500\n(Advanced hair treatment & styling)\n\nIndividual services also available!",
    
    booking: "📅 To book an appointment:\n\n1. Click 'Book Appointment' on our website\n2. Fill in your details\n3. We'll confirm via WhatsApp\n\nOr call/WhatsApp directly:\n+92 313 0103399\n\nWe're open Tue-Sun 1 PM - 11 PM\n(Closed Monday)",
    
    services: "✂️ Our Services:\n\n• Hair Cut & Styling\n• Stylish Beard/Shave\n• Dermacos Facial\n• Hexagonal Cleanser\n• Guava Glow Scrub + Grey Cream\n• Blackheads Removal\n• Neck Whitening\n• Manicure + Pedicure\n• Hair Wash + Styling\n• Makeup + Dress Setting\n\nWe professionally focus on your complete get-up!"
  };

  const handleSendMessage = (message?: string) => {
    const messageToSend = message || inputMessage.trim();
    if (!messageToSend) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Generate bot response
    setTimeout(() => {
      let botResponse = "Thank you for your message! For specific inquiries, please call us at +92 313 0103399 or visit our shop in Model Colony, Karachi.";

      // Check for keywords
      const lowerMessage = messageToSend.toLowerCase();
      if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
        botResponse = responses.location;
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('package')) {
        botResponse = responses.pricing;
      } else if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
        botResponse = responses.booking;
      } else if (lowerMessage.includes('service') || lowerMessage.includes('what') || lowerMessage.includes('offer')) {
        botResponse = responses.services;
      } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        botResponse = "Hello! Welcome to Sheikh Sahab Barber Point - 'Style That Defines You'. How can I assist you today?";
      } else if (lowerMessage.includes('time') || lowerMessage.includes('hours') || lowerMessage.includes('open')) {
        botResponse = "🕒 We're open:\nTuesday - Sunday: 1:00 PM - 11:00 PM\nMonday: Closed\n\nYou can visit us anytime during these hours or call +92 313 0103399 to book an appointment.";
      }

      const botMessage = {
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (key: string) => {
    const botMessage = {
      type: 'bot',
      content: responses[key as keyof typeof responses],
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-amber-500 text-black p-4 rounded-full shadow-lg hover:bg-amber-400 transition-all duration-300 z-40 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-amber-500 text-black p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-.png" 
                alt="Sheikh Sahab" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h4 className="font-bold">Sheikh Sahab</h4>
                <p className="text-xs opacity-80">Barber Point Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-amber-400 p-1 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg whitespace-pre-line ${
                    message.type === 'user'
                      ? 'bg-amber-500 text-black'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-2 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2 mb-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply.key)}
                  className="flex items-center space-x-1 text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded transition-colors"
                >
                  {reply.icon}
                  <span>{reply.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-amber-500 text-black p-2 rounded-lg hover:bg-amber-400 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;