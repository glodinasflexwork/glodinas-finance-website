// Components
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Glodinas Finance B.V. | Data Protection",
  description: "Learn how Glodinas Finance B.V. collects, processes, and protects your personal data in compliance with GDPR and Dutch privacy laws.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">How Glodinas Finance B.V. protects your personal data</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> May 23, 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Glodinas Finance B.V. ("we," "our," or "us"), located at Schiphol Boulevard 127, Schiphol 1118 BG, Netherlands, is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website at www.glodinasfinance.nl, or otherwise interact with us.
            </p>
            <p className="text-gray-600 mb-4">
              We process personal data in accordance with the General Data Protection Regulation (GDPR) and the Dutch Implementation Act (Uitvoeringswet AVG). This policy outlines your rights and our obligations regarding your personal data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Data Controller</h2>
            <p className="text-gray-600 mb-4">
              Glodinas Finance B.V. is the data controller responsible for your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Company Name: Glodinas Finance B.V.</li>
              <li>Address: Schiphol Boulevard 127, Schiphol 1118 BG, Netherlands</li>
              <li>Email: privacy@glodinasfinance.nl</li>
              <li>Phone: +31 20 123 4567</li>
              <li>Chamber of Commerce (KVK) Number: 81805810</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Personal Data We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect and process the following categories of personal data:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Client Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Identity information: name, title, date of birth, gender, nationality</li>
              <li>Contact information: email address, telephone number, physical address</li>
              <li>Business information: company name, job title, business sector, KVK number, VAT number</li>
              <li>Financial information: bank account details, tax identification numbers, financial statements, income details, expense records</li>
              <li>Service data: information about the services you use, account settings, preferences</li>
              <li>Communication data: emails, letters, telephone calls, and other communications with us</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Website Visitor Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Technical data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
              <li>Usage data: information about how you use our website, products, and services</li>
              <li>Cookie data: information stored in cookies (see our Cookie Policy for details)</li>
              <li>Contact form data: information you provide when using our contact forms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Collect Your Personal Data</h2>
            <p className="text-gray-600 mb-4">
              We collect personal data through various channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Direct interactions: when you engage our services, create an account, fill in forms, or correspond with us</li>
              <li>Automated technologies: when you visit our website, through cookies and similar technologies</li>
              <li>Third parties: we may receive personal data from third parties such as business partners, subcontractors, payment providers, and publicly available sources</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Legal Basis for Processing</h2>
            <p className="text-gray-600 mb-4">
              We process your personal data on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Contract performance:</strong> Processing necessary for the performance of our contract with you or to take steps at your request before entering into a contract</li>
              <li><strong>Legal obligation:</strong> Processing necessary for compliance with our legal obligations (e.g., tax laws, anti-money laundering regulations)</li>
              <li><strong>Legitimate interests:</strong> Processing necessary for our legitimate interests or those of a third party, provided your interests and fundamental rights do not override those interests</li>
              <li><strong>Consent:</strong> Processing based on your specific consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. How We Use Your Personal Data</h2>
            <p className="text-gray-600 mb-4">
              We use your personal data for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Service Provision</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>To provide bookkeeping, financial administration, and tax services</li>
              <li>To manage your account and relationship with us</li>
              <li>To process financial transactions and payments</li>
              <li>To prepare financial statements, tax returns, and other financial documents</li>
              <li>To communicate with you about our services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Legal and Regulatory Compliance</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>To comply with legal and regulatory obligations, including tax laws and anti-money laundering regulations</li>
              <li>To verify your identity and conduct due diligence checks</li>
              <li>To maintain records as required by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 Business Operations</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>To improve our services and develop new offerings</li>
              <li>To manage our business operations and administration</li>
              <li>To ensure the security of our systems and prevent fraud</li>
              <li>To analyze usage patterns and trends</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.4 Marketing and Communications</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>To send you updates, newsletters, and information about our services (with your consent where required)</li>
              <li>To invite you to events or webinars that may be of interest to you</li>
              <li>To conduct satisfaction surveys and gather feedback</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p className="text-gray-600 mb-4">
              For financial and tax-related data, we are required by Dutch law to retain records for at least 7 years. For other types of data, the retention period may vary based on the nature of the data and the purpose of processing.
            </p>
            <p className="text-gray-600 mb-4">
              When personal data is no longer needed, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Sharing and Transfers</h2>
            <p className="text-gray-600 mb-4">
              We may share your personal data with the following categories of recipients:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Service providers:</strong> Third-party service providers who perform services on our behalf, such as IT providers, cloud storage providers, payment processors, and professional advisors</li>
              <li><strong>Regulatory authorities:</strong> Tax authorities, financial regulators, and other government bodies when required by law</li>
              <li><strong>Business partners:</strong> Partners with whom we offer co-branded services or joint marketing activities, with your consent where required</li>
              <li><strong>Professional advisors:</strong> Lawyers, bankers, auditors, and insurers who provide consultancy, banking, legal, insurance, and accounting services</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We ensure that all third parties respect the security of your personal data and treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.
            </p>
            <p className="text-gray-600 mb-4">
              When we transfer personal data outside the European Economic Area (EEA), we ensure a similar degree of protection by implementing at least one of the following safeguards:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Transfers to countries that have been deemed to provide an adequate level of protection by the European Commission</li>
              <li>Use of specific contracts approved by the European Commission (Standard Contractual Clauses)</li>
              <li>Implementation of binding corporate rules for transfers within a corporate group</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Secure networks and systems</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments and testing</li>
              <li>Staff training on data protection and security</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We have procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Under the GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Right to access:</strong> You can request a copy of the personal data we hold about you</li>
              <li><strong>Right to rectification:</strong> You can request correction of any inaccurate or incomplete personal data</li>
              <li><strong>Right to erasure:</strong> You can request deletion of your personal data in certain circumstances</li>
              <li><strong>Right to restrict processing:</strong> You can request restriction of processing of your personal data in certain circumstances</li>
              <li><strong>Right to data portability:</strong> You can request transfer of your personal data to you or a third party in a structured, commonly used, machine-readable format</li>
              <li><strong>Right to object:</strong> You can object to processing of your personal data in certain circumstances, particularly for direct marketing</li>
              <li><strong>Rights related to automated decision-making:</strong> You can request human intervention in automated decision-making and profiling</li>
              <li><strong>Right to withdraw consent:</strong> You can withdraw consent at any time where we rely on consent to process your personal data</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise any of these rights, please contact us at privacy@glodinasfinance.nl. We will respond to your request within one month. There is no fee for exercising your rights, but we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Cookies and Similar Technologies</h2>
            <p className="text-gray-600 mb-4">
              Our website uses cookies and similar technologies to distinguish you from other users. This helps us provide you with a good experience when you browse our website and allows us to improve our site.
            </p>
            <p className="text-gray-600 mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Strictly necessary cookies:</strong> Required for the operation of our website</li>
              <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count visitors and see how they move around our website</li>
              <li><strong>Functionality cookies:</strong> Used to recognize you when you return to our website</li>
              <li><strong>Targeting cookies:</strong> Record your visit to our website, the pages you visit, and the links you follow</li>
            </ul>
            <p className="text-gray-600 mb-4">
              You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are not intended for children under 16 years of age, and we do not knowingly collect personal data from children. If you are a parent or guardian and believe we may have collected information about your child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-600 mb-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Complaints</h2>
            <p className="text-gray-600 mb-4">
              If you have concerns about how we handle your personal data, please contact us first at privacy@glodinasfinance.nl, and we will do our best to resolve your concerns.
            </p>
            <p className="text-gray-600 mb-4">
              You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) if you believe that we have not complied with data protection laws. You can contact them at:
            </p>
            <ul className="list-none pl-6 space-y-2 text-gray-600 mb-4">
              <li>Autoriteit Persoonsgegevens</li>
              <li>Postbus 93374</li>
              <li>2509 AJ DEN HAAG</li>
              <li>Website: <a href="https://autoriteitpersoonsgegevens.nl" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul className="list-none pl-6 space-y-2 text-gray-600 mb-4">
              <li>Glodinas Finance B.V.</li>
              <li>Schiphol Boulevard 127</li>
              <li>Schiphol 1118 BG</li>
              <li>Netherlands</li>
              <li>Email: privacy@glodinasfinance.nl</li>
              <li>Phone: +31 20 123 4567</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions About Your Data?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact our data protection team for any questions or concerns about how we handle your personal information.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
