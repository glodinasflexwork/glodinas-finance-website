'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{
    email?: string;
    phone?: string;
  }>({});

  // Clear success message after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitStatus === 'success') {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Allow empty phone (it's optional)
    if (!phone) return true;
    
    // Dutch phone format (also accepts international format)
    const phoneRegex = /^(\+[0-9]{1,3})?[-\s]?([0-9]{1,4}[-\s]?){1,3}[0-9]{1,4}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation errors when user types
    if (name === 'email' || name === 'phone') {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: {email?: string; phone?: string} = {};
    let isValid = true;
    
    if (formData.email && !validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }
    
    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setSubmitStatus('success');
      
      // Scroll to top of form to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md animate-fadeIn">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-medium">Thank you for your message!</span>
          </div>
          <p className="mt-1">We will get back to you as soon as possible.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-medium">Submission Error</span>
          </div>
          <p className="mt-1">{errorMessage || 'There was an error submitting your message. Please try again.'}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              validationErrors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {validationErrors.email && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+31 6 12345678"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              validationErrors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {validationErrors.phone && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">Format: +31 6 12345678 or 06-12345678</p>
        </div>
        
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">* Required fields</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : 'Send Message'}
          </button>
        </div>
      </form>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
        <p className="text-gray-600 mb-1">Schiphol Boulevard 127</p>
        <p className="text-gray-600 mb-4">Schiphol 1118 BG</p>
        <p className="text-gray-600">
          <a href="mailto:info@glodinas.nl" className="text-blue-600 hover:underline">info@glodinas.nl</a>
        </p>
      </div>
    </div>
  );
}
