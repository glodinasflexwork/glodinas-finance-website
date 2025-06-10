'use client';
import { ValidationErrors, TouchedFields, FormDataType } from './types';

interface Props {
  formData: FormDataType;
  validationErrors: ValidationErrors;
  touchedFields: TouchedFields;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  renderFieldStatus: (field: string) => JSX.Element | null;
}

export default function PersonalStep({
  formData,
  validationErrors,
  touchedFields,
  handleChange,
  handleBlur,
  renderFieldStatus,
}: Props) {
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
}
