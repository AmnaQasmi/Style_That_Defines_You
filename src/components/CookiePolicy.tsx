import React from 'react';
import { Cookie } from 'lucide-react';

interface CookiePolicyProps {
  onAccept: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Cookie className="text-amber-500" size={24} />
          <h3 className="text-xl font-bold text-gray-900">Cookie Policy</h3>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          We use cookies to enhance your browsing experience, provide personalized content, 
          and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={onAccept}
            className="w-full bg-amber-500 text-black py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
          >
            Accept All Cookies
          </button>
          
          <button
            onClick={onAccept}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Accept Essential Only
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          You can change your preferences anytime in our privacy settings.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;