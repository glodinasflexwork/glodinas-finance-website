'use client';
import { useState, useEffect } from 'react';

export default function MoneyBirdInviteForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('nl'); // Default to Dutch
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Check if we're authenticated with Moneybird
  useEffect(() => {
    // This is a simple check - in production you might want to validate the token
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth') === 'success') {
      setIsAuthenticated(true);
    }
    
    // Handle errors
    const error = params.get('error');
    if (error) {
      setMessage({
        type: 'error',
        text: `Authentication error: ${error.replace(/_/g, ' ')}`
      });
    }
    
    // Clean up URL parameters
    if (params.has('auth') || params.has('error')) {
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  const handleConnect = () => {
    window.location.href = '/api/moneybird/authorize';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    
    try {
      const response = await fetch('/api/moneybird/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, language }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'Invitation sent! Please check your email to complete the setup.' 
        });
        // Reset form
        setName('');
        setEmail('');
      } else {
        if (response.status === 401) {
          // Token expired or not authenticated
          setIsAuthenticated(false);
          setMessage({ 
            type: 'error', 
            text: 'Your Moneybird connection has expired. Please reconnect.' 
          });
        } else {
          setMessage({ 
            type: 'error', 
            text: data.message || 'Failed to send invitation. Please try again.' 
          });
        }
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Get Started with Moneybird</h3>
      
      {message.text && (
        <div className={`p-4 mb-4 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.text}
        </div>
      )}
      
      {!isAuthenticated ? (
        <div className="text-center">
          <p className="mb-4 text-gray-600">
            First, connect your Moneybird account to send invitations directly to your clients.
          </p>
          <button
            onClick={handleConnect}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Connect with Moneybird
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Preferred Language</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="nl">Dutch</option>
              <option value="en">English</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending Invitation...' : 'Send Moneybird Invitation'}
          </button>
        </form>
      )}
    </div>
  );
}
