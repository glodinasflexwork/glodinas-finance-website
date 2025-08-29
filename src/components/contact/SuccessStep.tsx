'use client';

interface Props {
  handleReset: () => void;
}

export default function SuccessStep({ handleReset }: Props) {
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
}
