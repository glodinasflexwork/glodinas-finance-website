'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define form steps
type FormStep = 'personal' | 'details' | 'message' | 'review' | 'success';

// Define service options
const serviceOptions = [
  { value: 'bookkeeping-zzp', label: 'Bookkeeping for ZZP\'ers' },
  { value: 'bookkeeping-bv', label: 'Bookkeeping for BVs' },
  { value: 'payroll', label: 'Payroll Services' },
  { value: 'business-formation', label: 'Business Formation' },
  { value: 'personal-loans', label: 'Personal Loan Assistance' },
  { value: 'tax-preparation', label: 'Tax Preparation' },
  { value: 'other', label: 'Other' }
];

export default function ContactForm() {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    privacy: false
  });
  
  // Form state management
  const [currentStep, setCurrentStep] = useState<FormStep>('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Field validation state
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
    privacy?: string;
  }>({});
  
  // Field touched state for real-time validation
  const [touchedFields, setTouchedFields] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    service?: boolean;
    message?: boolean;
    privacy?: boolean;
  }>({});

  // Auto-save form data to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(prevData => ({
          ...prevData,
          ...parsedData,
          // Don't restore privacy consent from localStorage
          privacy: false
        }));
      } catch (e) {
        console.error('Error parsing saved form data:', e);
      }
    }
  }, []);

  // Save form data when it changes
  useEffect(() => {
    if (formData.name || formData.email || formData.phone || formData.company || formData.message) {
      const dataToSave = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        // Don't save privacy consent to localStorage
      };
      localStorage.setItem('contactFormData', JSON.stringify(dataToSave));
    }
  }, [formData]);

  // Add custom animation class when success state changes
  useEffect(() => {
    if (currentStep === 'success') {
      // Clear form data from localStorage
      localStorage.removeItem('contactFormData');
      
      // Confetti effect
      const confettiScript = document.createElement('script');
      confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
      confettiScript.async = true;
      confettiScript.onload = () => {
        // @ts-ignore
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      };
      document.body.appendChild(confettiScript);
      
      return () => {
        document.body.removeChild(confettiScript);
      };
    }
  }, [currentStep]);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    // Allow empty phone (it's optional)
    if (!phone) return undefined;
    
    // Dutch phone format (also accepts international format)
    const phoneRegex = /^(\+[0-9]{1,3})?[-\s]?([0-9]{1,4}[-\s]?){1,3}[0-9]{1,4}$/;
    if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
    return undefined;
  };

  const validateService = (service: string): string | undefined => {
    if (!service) return 'Please select a service';
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    return undefined;
  };

  const validatePrivacy = (privacy: boolean): string | undefined => {
    if (!privacy) return 'You must agree to the privacy policy';
    return undefined;
  };

  // Validate current step fields
  const validateCurrentStep = (): boolean => {
    const errors: any = {};
    let isValid = true;
    
    if (currentStep === 'personal') {
      const nameError = validateName(formData.name);
      const emailError = validateEmail(formData.email);
      const phoneError = validatePhone(formData.phone);
      
      if (nameError) {
        errors.name = nameError;
        isValid = false;
      }
      
      if (emailError) {
        errors.email = emailError;
        isValid = false;
      }
      
      if (phoneError) {
        errors.phone = phoneError;
        isValid = false;
      }
    } 
    else if (currentStep === 'details') {
      const serviceError = validateService(formData.service);
      
      if (serviceError) {
        errors.service = serviceError;
        isValid = false;
      }
    } 
    else if (currentStep === 'message') {
      const messageError = validateMessage(formData.message);
      
      if (messageError) {
        errors.message = messageError;
        isValid = false;
      }
    }
    else if (currentStep === 'review') {
      const privacyError = validatePrivacy(formData.privacy);
      
      if (privacyError) {
        errors.privacy = privacyError;
        isValid = false;
      }
    }
    
    setValidationErrors(errors);
    return isValid;
  };

  // Validate a single field on blur
  const validateField = (name: string, value: any) => {
    let error;
    
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'service':
        error = validateService(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      case 'privacy':
        error = validatePrivacy(value);
        break;
      default:
        return;
    }
    
    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    return !error;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: newValue }));
    
    // Validate field if it's been touched
    if (touchedFields[name as keyof typeof touchedFields]) {
      validateField(name, newValue);
    }
  };

  // Handle field blur for validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    // Mark field as touched
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate the field
    validateField(name, fieldValue);
  };

  // Handle form navigation
  const handleNextStep = () => {
    if (!validateCurrentStep()) return;
    
    switch (currentStep) {
      case 'personal':
        setCurrentStep('details');
        break;
      case 'details':
        setCurrentStep('message');
        break;
      case 'message':
        setCurrentStep('review');
        break;
      case 'review':
        handleSubmit();
        break;
      default:
        break;
    }
    
    // Scroll to top of form
    const formElement = document.querySelector('.contact-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    switch (currentStep) {
      case 'details':
        setCurrentStep('personal');
        break;
      case 'message':
        setCurrentStep('details');
        break;
      case 'review':
        setCurrentStep('message');
        break;
      default:
        break;
    }
    
    // Scroll to top of form
    const formElement = document.querySelector('.contact-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Final validation
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const serviceError = validateService(formData.service);
    const messageError = validateMessage(formData.message);
    const privacyError = validatePrivacy(formData.privacy);
    
    const errors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      service: serviceError,
      message: messageError,
      privacy: privacyError
    };
    
    // Filter out undefined errors
    const filteredErrors = Object.fromEntries(
      Object.entries(errors).filter(([_, value]) => value !== undefined)
    );
    
    if (Object.keys(filteredErrors).length > 0) {
      setValidationErrors(filteredErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message
        }),
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
        service: '',
        message: '',
        privacy: false
      });
      
      // Show success state
      setCurrentStep('success');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form to start over
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      privacy: false
    });
    setCurrentStep('personal');
    setValidationErrors({});
    setTouchedFields({});
    setSubmitStatus(null);
    
    // Clear localStorage
    localStorage.removeItem('contactFormData');
  };

  // Get progress percentage
  const getProgress = () => {
    switch (currentStep) {
      case 'personal': return 25;
      case 'details': return 50;
      case 'message': return 75;
      case 'review': return 100;
      case 'success': return 100;
      default: return 0;
    }
  };

  // Render field status icon
  const renderFieldStatus = (fieldName: string) => {
    const error = validationErrors[fieldName as keyof typeof validationErrors];
    const touched = touchedFields[fieldName as keyof typeof touchedFields];
    
    if (!touched) return null;
    
    if (error) {
      return (
        <svg className="w-5 h-5 text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      );
    }
  };

  // Render form content based on current step
  const renderFormContent = () => {
    switch (currentStep) {
      case 'personal':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    validationErrors.name ? 'border-red-500' : touchedFields.name && !validationErrors.name ? 'border-green-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                  required
                />
                {renderFieldStatus('name')}
              </div>
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
              )}
            </div>
            
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    validationErrors.email ? 'border-red-500' : touchedFields.email && !validationErrors.email ? 'border-green-500' : 'border-gray-300'
                  }`}
                  placeholder="john.doe@example.com"
                  required
                />
                {renderFieldStatus('email')}
              </div>
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
              )}
            </div>
            
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    validationErrors.phone ? 'border-red-500' : touchedFields.phone && formData.phone && !validationErrors.phone ? 'border-green-500' : 'border-gray-300'
                  }`}
                  placeholder="+31 6 12345678"
                />
                {formData.phone && renderFieldStatus('phone')}
              </div>
              {validationErrors.phone && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">Format: +31 6 12345678 or 06-12345678</p>
            </div>
            
            <div className="relative">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Company Ltd."
              />
            </div>
          </div>
        );
        
      case 'details':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Details</h3>
            
            <div className="relative">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service of Interest <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    validationErrors.service ? 'border-red-500' : touchedFields.service && !validationErrors.service ? 'border-green-500' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {renderFieldStatus('service')}
              </div>
              {validationErrors.service && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.service}</p>
              )}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Service Information</h4>
              <div className="text-sm text-blue-700">
                {formData.service === 'bookkeeping-zzp' && (
                  <p>Our bookkeeping services for ZZP'ers start at €130/month (ex VAT) and include monthly financial reports, tax preparation, and Moneybird integration.</p>
                )}
                {formData.service === 'bookkeeping-bv' && (
                  <p>Our bookkeeping services for BVs start at €150/month (ex VAT) and include comprehensive financial management, tax preparation, and corporate compliance.</p>
                )}
                {formData.service === 'payroll' && (
                  <p>Our payroll services through Employes ensure accurate and timely salary processing, tax withholding, and compliance with Dutch labor laws.</p>
                )}
                {formData.service === 'business-formation' && (
                  <p>We partner with Firm24 to provide seamless business registration services, including KVK registration and legal structure setup.</p>
                )}
                {formData.service === 'personal-loans' && (
                  <p>We assist with personal loan applications at major Dutch banks including ING, ABN AMRO, RABOBANK, and SNS.</p>
                )}
                {formData.service === 'tax-preparation' && (
                  <p>Our tax preparation services ensure compliance with Dutch tax regulations while maximizing available deductions and credits.</p>
                )}
                {formData.service === 'other' && (
                  <p>Please describe your specific needs in the message section, and we'll be happy to discuss how we can assist you.</p>
                )}
                {!formData.service && (
                  <p>Please select a service to see more information.</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 'message':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Message</h3>
            
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={6}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  validationErrors.message ? 'border-red-500' : touchedFields.message && !validationErrors.message ? 'border-green-500' : 'border-gray-300'
                }`}
                placeholder="Please describe your inquiry or requirements..."
                required
              ></textarea>
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">Please provide details about your specific needs or questions.</p>
            </div>
          </div>
        );
        
      case 'review':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Review Your Information</h3>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p className="text-gray-800">{formData.name}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <p className="text-gray-800">{formData.email}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <p className="text-gray-800">{formData.phone || 'Not provided'}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Company</h4>
                  <p className="text-gray-800">{formData.company || 'Not provided'}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Service</h4>
                  <p className="text-gray-800">
                    {serviceOptions.find(option => option.value === formData.service)?.label || 'Not selected'}
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500">Message</h4>
                <p className="text-gray-800 whitespace-pre-line">{formData.message}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                checked={formData.privacy}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 ${
                  validationErrors.privacy ? 'border-red-500' : ''
                }`}
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800">privacy policy</Link> and consent to being contacted regarding my inquiry.
              </label>
            </div>
            {validationErrors.privacy && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.privacy}</p>
            )}
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 className="font-medium text-blue-800">What happens next?</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    After submitting your request, our team will review your information and contact you within 1-2 business days to discuss your needs in more detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'success':
        return (
          <div className="text-center py-10 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-lg text-gray-600 mb-6">
              Your message has been successfully submitted. We appreciate your interest in Glodinas Finance B.V.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200 text-left mb-8 max-w-md mx-auto">
              <h4 className="font-medium text-blue-800 mb-2">What happens next?</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>You'll receive a confirmation email shortly.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Our team will review your request within 1-2 business days.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>A representative will contact you to discuss your needs.</span>
                </li>
              </ul>
            </div>
            
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };

  // Render error message
  const renderErrorMessage = () => {
    if (submitStatus !== 'error') return null;
    
    return (
      <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md animate-fadeIn">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="font-medium">Submission Error</span>
        </div>
        <p className="mt-1">{errorMessage || 'There was an error submitting your message. Please try again.'}</p>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Error message */}
      {renderErrorMessage()}
      
      {/* Progress bar (hidden on success step) */}
      {currentStep !== 'success' && (
        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep === 'personal' ? '1' : currentStep === 'details' ? '2' : currentStep === 'message' ? '3' : '4'} of 4
            </span>
            <span className="text-sm font-medium text-gray-700">{getProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Form content */}
      {renderFormContent()}
      
      {/* Navigation buttons (hidden on success step) */}
      {currentStep !== 'success' && (
        <div className="flex justify-between mt-8">
          {currentStep !== 'personal' ? (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain flex spacing
          )}
          
          <button
            type="button"
            onClick={handleNextStep}
            disabled={isSubmitting}
            className={`px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : currentStep === 'review' ? 'Submit' : 'Continue'}
          </button>
        </div>
      )}
      
      {/* Contact Information (hidden on success step) */}
      {currentStep !== 'success' && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
          <p className="text-gray-600 mb-1">Schiphol Boulevard 127</p>
          <p className="text-gray-600 mb-4">Schiphol 1118 BG</p>
          <p className="text-gray-600">
            <a href="mailto:info@glodinas.nl" className="text-blue-600 hover:underline">info@glodinas.nl</a>
          </p>
        </div>
      )}
      
      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
