import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

interface EmailPopupProps {
  onSubmit: (email: string) => void;
  onClose: () => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ onSubmit, onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    onSubmit(email);
  };

  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail size={24} className="text-blue-600" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Enjoying the content?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to receive more exclusive content like this directly in your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Continue Watching
          </button>
          
          <p className="text-xs text-center text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmailPopup;