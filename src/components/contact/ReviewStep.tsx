'use client';
import Link from 'next/link';
import { ValidationErrors, FormDataType } from './types';

interface ServiceOption {
  value: string;
  label: string;
}

interface Props {
  formData: FormDataType;
  validationErrors: ValidationErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  serviceOptions: ServiceOption[];
}

export default function ReviewStep({
  formData,
  validationErrors,
  handleChange,
  handleBlur,
  serviceOptions,
}: Props) {
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
}
