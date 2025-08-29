'use client';
import { ValidationErrors, TouchedFields, FormDataType } from './types';

interface ServiceOption {
  value: string;
  label: string;
}

interface Props {
  formData: FormDataType;
  validationErrors: ValidationErrors;
  touchedFields: TouchedFields;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  renderFieldStatus: (field: string) => JSX.Element | null;
  serviceOptions: ServiceOption[];
}

export default function DetailsStep({
  formData,
  validationErrors,
  touchedFields,
  handleChange,
  handleBlur,
  renderFieldStatus,
  serviceOptions,
}: Props) {
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
}
