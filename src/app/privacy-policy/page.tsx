'use client';

// Components
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('privacyPolicy.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('privacyPolicy.hero.subtitle')}</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              <strong>{t('privacyPolicy.lastUpdated')}</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.introduction.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.introduction.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.introduction.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.dataController.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataController.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>{t('privacyPolicy.sections.dataController.companyName')}</li>
              <li>{t('privacyPolicy.sections.dataController.address')}</li>
              <li>{t('privacyPolicy.sections.dataController.email')}</li>
              <li>{t('privacyPolicy.sections.dataController.phone')}</li>
              <li>{t('privacyPolicy.sections.dataController.kvk')}</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.personalData.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.personalData.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('privacyPolicy.sections.personalData.clientData.title')}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.personalData.clientData.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('privacyPolicy.sections.personalData.websiteVisitorData.title')}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.personalData.websiteVisitorData.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.howWeCollect.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.howWeCollect.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.howWeCollect.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.legalBasis.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.legalBasis.paragraph')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.legalBasis.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.howWeUse.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.howWeUse.paragraph')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('privacyPolicy.sections.howWeUse.serviceProvision.title')}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.howWeUse.serviceProvision.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('privacyPolicy.sections.howWeUse.compliance.title')}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.howWeUse.compliance.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('privacyPolicy.sections.howWeUse.operations.title')}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.howWeUse.operations.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('privacyPolicy.sections.howWeUse.marketing.title')}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.howWeUse.marketing.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.dataRetention.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataRetention.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataRetention.paragraph2')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataRetention.paragraph3')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.dataSharing.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSharing.paragraph1')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSharing.recipients', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSharing.paragraph2')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSharing.paragraph3')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSharing.safeguards', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.dataSecurity.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSecurity.paragraph1')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSecurity.measures', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.dataSecurity.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.yourRights.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.yourRights.paragraph1')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.yourRights.rights', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.yourRights.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.cookies.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.cookies.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.cookies.paragraph2')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              {t('privacyPolicy.sections.cookies.cookieTypes', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.cookies.paragraph3')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.childrenPrivacy.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.childrenPrivacy.paragraph')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.changes.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.changes.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.changes.paragraph2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.complaints.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.complaints.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.complaints.paragraph2')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.complaints.authority.name')}<br />
              {t('privacyPolicy.sections.complaints.authority.address1')}<br />
              {t('privacyPolicy.sections.complaints.authority.address2')}<br />
              {t('privacyPolicy.sections.complaints.authority.website')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacyPolicy.sections.contactUs.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.contactUs.paragraph')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.contactUs.contact.company')}<br />
              {t('privacyPolicy.sections.contactUs.contact.address1')}<br />
              {t('privacyPolicy.sections.contactUs.contact.address2')}<br />
              {t('privacyPolicy.sections.contactUs.contact.country')}<br />
              {t('privacyPolicy.sections.contactUs.contact.email')}<br />
              {t('privacyPolicy.sections.contactUs.contact.phone')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('privacyPolicy.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('privacyPolicy.cta.paragraph')}
          </p>
          <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
            {t('privacyPolicy.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}         </p>
          <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
