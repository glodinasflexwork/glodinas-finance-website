'use client';
import { ValidationErrors, TouchedFields, FormDataType } from './types';

interface Props {
  formData: FormDataType;
  validationErrors: ValidationErrors;
  touchedFields: TouchedFields;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function MessageStep({
  formData,
  validationErrors,
  touchedFields,
  handleChange,
  handleBlur,
}: Props) {
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
}
