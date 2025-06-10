'use client';

import { useState, useEffect } from 'react';
import PersonalStep from './contact/PersonalStep';
import DetailsStep from './contact/DetailsStep';
import MessageStep from './contact/MessageStep';
import ReviewStep from './contact/ReviewStep';
import SuccessStep from './contact/SuccessStep';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateService,
  validateMessage,
  validatePrivacy,
} from '@/utils/validation';
import type { FormDataType, ValidationErrors, TouchedFields } from './contact/types';

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
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    privacy: false,
  });
  
  // Form state management
  const [currentStep, setCurrentStep] = useState<FormStep>('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Field validation state
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  
  // Field touched state for real-time validation
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({});

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
          <PersonalStep
            formData={formData}
            validationErrors={validationErrors}
            touchedFields={touchedFields}
            handleChange={handleChange}
            handleBlur={handleBlur}
            renderFieldStatus={renderFieldStatus}
          />
        );
      case 'details':
        return (
          <DetailsStep
            formData={formData}
            validationErrors={validationErrors}
            touchedFields={touchedFields}
            handleChange={handleChange}
            handleBlur={handleBlur}
            renderFieldStatus={renderFieldStatus}
            serviceOptions={serviceOptions}
          />
        );
      case 'message':
        return (
          <MessageStep
            formData={formData}
            validationErrors={validationErrors}
            touchedFields={touchedFields}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 'review':
        return (
          <ReviewStep
            formData={formData}
            validationErrors={validationErrors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            serviceOptions={serviceOptions}
          />
        );
      case 'success':
        return <SuccessStep handleReset={handleReset} />;
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
