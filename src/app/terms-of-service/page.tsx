// Components
import Link from 'next/link';

export const metadata = {
  title: "Terms of Service | Glodinas Finance B.V. | Dutch Financial Services",
  description: "Terms and conditions for Glodinas Finance B.V. bookkeeping and financial services. Learn about our service agreements, client responsibilities, and legal terms.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-3xl mx-auto">General terms and conditions for Glodinas Finance B.V. services</p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> May 23, 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service ("Terms") govern your use of the services provided by Glodinas Finance B.V. ("we," "our," or "us"), a company registered in the Netherlands with Chamber of Commerce (KVK) number 81805810, located at Schiphol Boulevard 127, Schiphol 1118 BG, Netherlands.
            </p>
            <p className="text-gray-600 mb-4">
              By engaging our services, you ("Client," "you," or "your") agree to be bound by these Terms. Please read them carefully before entering into any agreement with us. If you do not agree with these Terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Definitions</h2>
            <p className="text-gray-600 mb-4">
              In these Terms, the following definitions apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Services:</strong> The bookkeeping, financial administration, tax services, and other related services provided by Glodinas Finance B.V. as specified in the Service Agreement</li>
              <li><strong>Service Agreement:</strong> The specific agreement between Glodinas Finance B.V. and the Client detailing the scope of services, fees, and other specific terms</li>
              <li><strong>Client Materials:</strong> Any documents, information, data, or other materials provided by the Client to Glodinas Finance B.V. for the purpose of providing the Services</li>
              <li><strong>Deliverables:</strong> Reports, financial statements, tax returns, and other outputs produced by Glodinas Finance B.V. as part of the Services</li>
              <li><strong>Confidential Information:</strong> Any non-public information disclosed by either party to the other in connection with the Services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Services</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Scope of Services</h3>
            <p className="text-gray-600 mb-4">
              We provide bookkeeping, financial administration, tax services, and other related services as specified in the Service Agreement. The exact scope of services will be detailed in the Service Agreement between Glodinas Finance B.V. and the Client.
            </p>
            <p className="text-gray-600 mb-4">
              Our standard service packages include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Bookkeeping services for ZZP'ers (self-employed professionals)</li>
              <li>Bookkeeping services for BVs (private limited companies), including pay-rolling for DGA</li>
              <li>Tax preparation and filing</li>
              <li>Financial statement preparation</li>
              <li>Business formation assistance</li>
              <li>Personal loan application support</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Service Delivery</h3>
            <p className="text-gray-600 mb-4">
              We will provide the Services with reasonable skill and care, in accordance with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Generally accepted professional standards and practices</li>
              <li>Applicable laws and regulations in the Netherlands</li>
              <li>The specific terms outlined in the Service Agreement</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We reserve the right to determine the method, details, and means of performing the Services, including which personnel to assign to the Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Service Modifications</h3>
            <p className="text-gray-600 mb-4">
              Any modifications to the scope of Services must be agreed upon in writing by both parties. Additional services may result in additional fees, which will be communicated to you before such services are provided.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Client Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              To enable us to provide the Services effectively, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Provide accurate, complete, and timely information and documentation as reasonably requested by us</li>
              <li>Respond promptly to our inquiries and requests for additional information</li>
              <li>Notify us immediately of any changes to your business structure, ownership, or other relevant circumstances</li>
              <li>Review all Deliverables promptly and notify us of any issues or concerns</li>
              <li>Comply with all applicable laws and regulations related to your business and financial activities</li>
              <li>Maintain the confidentiality of any login credentials, access information, or other security measures provided by us</li>
              <li>Use our Services only for lawful purposes and in accordance with these Terms</li>
            </ul>
            <p className="text-gray-600 mb-4">
              You acknowledge that our ability to provide the Services depends on your fulfillment of these responsibilities. Delays or failures on your part may result in delays or issues with the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Fees and Payment</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Fees</h3>
            <p className="text-gray-600 mb-4">
              Our fees for the Services will be as specified in the Service Agreement. Unless otherwise stated, all fees are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Quoted in Euros (€)</li>
              <li>Exclusive of Value Added Tax (BTW) or other applicable taxes</li>
              <li>Subject to annual review and adjustment</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Payment Terms</h3>
            <p className="text-gray-600 mb-4">
              Unless otherwise specified in the Service Agreement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Invoices will be issued monthly in advance for ongoing services</li>
              <li>Payment is due within 14 days of the invoice date</li>
              <li>Payments must be made by bank transfer to the account specified on the invoice</li>
              <li>All payments must be made without any deduction, set-off, or counterclaim</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Late Payments</h3>
            <p className="text-gray-600 mb-4">
              If you fail to make any payment by the due date:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>We may charge interest on the overdue amount at the statutory commercial interest rate (wettelijke handelsrente) under Dutch law</li>
              <li>We may suspend the provision of Services until payment is made in full</li>
              <li>You will be responsible for all costs incurred in collecting overdue payments, including reasonable legal fees</li>
            </ul>
            <p className="text-gray-600 mb-4">
              In accordance with Dutch law, the payment term for business-to-business transactions shall not exceed 60 days, unless expressly agreed otherwise and provided that this is not manifestly unfair to the creditor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Term and Termination</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Term</h3>
            <p className="text-gray-600 mb-4">
              The term of our service relationship will be as specified in the Service Agreement. If no specific term is specified, the agreement will continue until terminated in accordance with these Terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Termination by Either Party</h3>
            <p className="text-gray-600 mb-4">
              Either party may terminate the service relationship:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>By providing at least 30 days' written notice to the other party</li>
              <li>Immediately if the other party commits a material breach of these Terms or the Service Agreement and fails to remedy such breach within 14 days of being notified in writing</li>
              <li>Immediately if the other party becomes insolvent, enters into liquidation, has a receiver appointed, or ceases to carry on business</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 Consequences of Termination</h3>
            <p className="text-gray-600 mb-4">
              Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>You will pay all outstanding fees for Services provided up to the date of termination</li>
              <li>We will return all Client Materials to you, subject to our right to retain copies as required by law or professional standards</li>
              <li>Any provisions of these Terms that by their nature should survive termination will survive termination</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Confidentiality</h2>
            <p className="text-gray-600 mb-4">
              Each party agrees to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Keep confidential all Confidential Information received from the other party</li>
              <li>Use Confidential Information only for the purpose of providing or receiving the Services</li>
              <li>Not disclose Confidential Information to any third party without the prior written consent of the disclosing party, except as required by law, regulation, or professional standards</li>
              <li>Implement reasonable security measures to protect Confidential Information</li>
            </ul>
            <p className="text-gray-600 mb-4">
              These confidentiality obligations will survive the termination of our service relationship.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.1 Client Materials</h3>
            <p className="text-gray-600 mb-4">
              You retain all rights, title, and interest in and to the Client Materials. You grant us a non-exclusive, royalty-free license to use, reproduce, and modify the Client Materials solely for the purpose of providing the Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.2 Deliverables</h3>
            <p className="text-gray-600 mb-4">
              Upon full payment of all applicable fees, you will own all rights to the content of the Deliverables, subject to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>We retain all rights to our pre-existing materials, methodologies, tools, techniques, and know-how</li>
              <li>We retain the right to use general knowledge, skills, and experience acquired during the provision of the Services</li>
              <li>We retain the right to use anonymized data for statistical, research, and improvement purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Protection</h2>
            <p className="text-gray-600 mb-4">
              Each party will comply with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the Dutch Implementation Act (Uitvoeringswet AVG).
            </p>
            <p className="text-gray-600 mb-4">
              For details on how we process personal data, please refer to our <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Liability</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.1 Limitation of Liability</h3>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Our total liability arising out of or in connection with the Services, whether in contract, tort (including negligence), or otherwise, will not exceed the total amount of fees paid by you for the Services in the 12 months preceding the event giving rise to the liability</li>
              <li>We will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities</li>
              <li>We will not be liable for any errors or omissions in the Deliverables resulting from inaccurate or incomplete Client Materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.2 Exclusions</h3>
            <p className="text-gray-600 mb-4">
              Nothing in these Terms excludes or limits our liability for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Death or personal injury caused by our negligence</li>
              <li>Fraud or fraudulent misrepresentation</li>
              <li>Any other liability that cannot be excluded or limited by Dutch law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.3 Time Limitation</h3>
            <p className="text-gray-600 mb-4">
              Any claim arising out of or in connection with the Services must be brought within one (1) year from the date the claimant knew or should have known of the facts giving rise to such claim.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify, defend, and hold harmless Glodinas Finance B.V. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in connection with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Your breach of these Terms or the Service Agreement</li>
              <li>Your violation of any law or the rights of a third party</li>
              <li>Your use or misuse of the Services</li>
              <li>Any inaccurate or incomplete information provided by you</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Force Majeure</h2>
            <p className="text-gray-600 mb-4">
              Neither party will be liable for any failure or delay in performing its obligations under these Terms if such failure or delay is caused by circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemic, epidemic, government actions, war, terrorism, riots, civil unrest, fire, explosion, flood, strike, or other labor dispute.
            </p>
            <p className="text-gray-600 mb-4">
              The affected party will promptly notify the other party of the force majeure event and use reasonable efforts to minimize the impact and resume performance as soon as possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Notices</h2>
            <p className="text-gray-600 mb-4">
              All notices under these Terms must be in writing and will be deemed given:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>When delivered personally</li>
              <li>When sent by confirmed email</li>
              <li>When sent by registered mail or courier to the address specified in the Service Agreement</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Assignment</h2>
            <p className="text-gray-600 mb-4">
              You may not assign or transfer these Terms or any rights or obligations under these Terms without our prior written consent. We may assign or transfer these Terms or any rights or obligations under these Terms to any affiliate or successor in interest without your consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Amendments</h2>
            <p className="text-gray-600 mb-4">
              We may amend these Terms from time to time by posting the updated Terms on our website or by providing notice to you. Your continued use of the Services after such amendments constitutes your acceptance of the amended Terms.
            </p>
            <p className="text-gray-600 mb-4">
              Material changes to these Terms will be communicated to you at least 30 days before they take effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              In the event of any dispute arising out of or in connection with these Terms or the Services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>The parties will first attempt to resolve the dispute through good-faith negotiations</li>
              <li>If the dispute cannot be resolved through negotiations within 30 days, either party may initiate legal proceedings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Governing Law and Jurisdiction</h2>
            <p className="text-gray-600 mb-4">
              These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Netherlands.
            </p>
            <p className="text-gray-600 mb-4">
              The parties irrevocably agree that the courts of Amsterdam, the Netherlands, shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter or formation (including non-contractual disputes or claims).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">18. Severability</h2>
            <p className="text-gray-600 mb-4">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will remain in full force and effect. The invalid, illegal, or unenforceable provision will be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">19. Entire Agreement</h2>
            <p className="text-gray-600 mb-4">
              These Terms, together with the Service Agreement and any other documents expressly incorporated by reference, constitute the entire agreement between you and us regarding the Services and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning the subject matter.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">20. No Waiver</h2>
            <p className="text-gray-600 mb-4">
              No failure or delay by either party in exercising any right under these Terms will constitute a waiver of that right. No waiver of any term or condition will be deemed a further or continuing waiver of such term or condition or any other term or condition.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">21. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-none pl-6 space-y-2 text-gray-600 mb-4">
              <li>Glodinas Finance B.V.</li>
              <li>Schiphol Boulevard 127</li>
              <li>Schiphol 1118 BG</li>
              <li>Netherlands</li>
              <li>Email: info@glodinasfinance.nl</li>
              <li>Phone: +31 20 123 4567</li>
              <li>KVK Number: 81805810</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions About Our Terms?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact our team for any questions or clarifications about our terms of service or to discuss your specific service requirements.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
