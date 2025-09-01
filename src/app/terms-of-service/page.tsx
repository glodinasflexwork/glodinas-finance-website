'use client';

// Components
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('termsOfService.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('termsOfService.hero.subtitle')}</p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              <strong>{t('termsOfService.lastUpdated')}</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.introduction.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.introduction.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.introduction.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.definitions.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.definitions.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.definitions.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.definitions.items')}</li>;
              })()}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.services.title')}</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.services.scope.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.services.scope.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.services.scope.paragraph2')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.services.scope.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.services.scope.items')}</li>;
              })()}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.services.delivery.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.services.delivery.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.services.delivery.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.services.delivery.items')}</li>;
              })()}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.services.delivery.additionalParagraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.services.modifications.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.services.modifications.paragraph')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.clientResponsibilities.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.clientResponsibilities.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.clientResponsibilities.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.clientResponsibilities.items')}</li>;
              })()}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.clientResponsibilities.additionalParagraph')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.feesAndPayment.title')}</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.feesAndPayment.fees.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.feesAndPayment.fees.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.feesAndPayment.fees.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.feesAndPayment.fees.items')}</li>;
              })()}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.feesAndPayment.paymentTerms.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.feesAndPayment.paymentTerms.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.feesAndPayment.paymentTerms.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.feesAndPayment.paymentTerms.items')}</li>;
              })()}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.feesAndPayment.latePayments.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.feesAndPayment.latePayments.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.feesAndPayment.latePayments.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.feesAndPayment.latePayments.items')}</li>;
              })()}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.feesAndPayment.latePayments.additionalParagraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.feesAndPayment.meetingCancellation.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.feesAndPayment.meetingCancellation.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.feesAndPayment.meetingCancellation.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.feesAndPayment.meetingCancellation.items')}</li>;
              })()}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.feesAndPayment.meetingCancellation.additionalParagraph')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.termAndTermination.title')}</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.termAndTermination.term.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.termAndTermination.term.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.termAndTermination.terminationByEither.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.termAndTermination.terminationByEither.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.termAndTermination.terminationByEither.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.termAndTermination.terminationByEither.items')}</li>;
              })()}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.termAndTermination.consequences.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.termAndTermination.consequences.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.termAndTermination.consequences.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.termAndTermination.consequences.items')}</li>;
              })()}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.confidentiality.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.confidentiality.paragraph1')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.confidentiality.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.confidentiality.items')}</li>;
              })()}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.confidentiality.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.intellectualProperty.title')}</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.intellectualProperty.clientMaterials.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.intellectualProperty.clientMaterials.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.intellectualProperty.deliverables.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.intellectualProperty.deliverables.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.intellectualProperty.deliverables.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.intellectualProperty.deliverables.items')}</li>;
              })()}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.dataProtection.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.dataProtection.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.dataProtection.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.liability.title')}</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.liability.limitation.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.liability.limitation.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.liability.limitation.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.liability.limitation.items')}</li>;
              })()}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.liability.exclusions.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.liability.exclusions.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {(() => {
                const items = t('termsOfService.sections.liability.exclusions.items', { returnObjects: true });
                return Array.isArray(items) && typeof items.map === 'function'
                  ? items.map((item, index) => <li key={index}>{item}</li>)
                  : <li>{t('termsOfService.sections.liability.exclusions.items')}</li>;
              })()}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.liability.timeLimitation.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.liability.timeLimitation.paragraph')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.generalProvisions.title')}</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.generalProvisions.entireAgreement.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.generalProvisions.entireAgreement.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.generalProvisions.severability.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.generalProvisions.severability.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.generalProvisions.waiver.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.generalProvisions.waiver.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.generalProvisions.assignment.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.generalProvisions.assignment.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.generalProvisions.forceMAjeure.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.generalProvisions.forceMAjeure.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.generalProvisions.notices.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.generalProvisions.notices.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('termsOfService.sections.generalProvisions.relationship.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.generalProvisions.relationship.paragraph')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.governingLaw.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.governingLaw.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.governingLaw.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('termsOfService.sections.contactUs.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.contactUs.paragraph')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('termsOfService.sections.contactUs.contact.company')}<br />
              {t('termsOfService.sections.contactUs.contact.address1')}<br />
              {t('termsOfService.sections.contactUs.contact.address2')}<br />
              {t('termsOfService.sections.contactUs.contact.country')}<br />
              {t('termsOfService.sections.contactUs.contact.email')}<br />
              {t('termsOfService.sections.contactUs.contact.phone')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('termsOfService.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('termsOfService.cta.paragraph')}
          </p>
          <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
            {t('termsOfService.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
