import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Shopulence | Privacy Policy';
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> 2025
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Shopulence ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our wholesale distribution services.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, business address, VAT number, and company registration details</li>
              <li><strong>Account Information:</strong> Username, password, and account preferences</li>
              <li><strong>Transaction Information:</strong> Order history, payment details, and delivery addresses</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website and services</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>To process and fulfill your orders</li>
              <li>To manage your trade account</li>
              <li>To communicate with you about your orders and our services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud and ensure security</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">4. Legal Basis for Processing</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Under GDPR, we process your personal data based on the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Performance of a contract (processing orders and providing services)</li>
              <li>Legal obligation (complying with tax and accounting requirements)</li>
              <li>Legitimate interests (improving services, fraud prevention)</li>
              <li>Consent (marketing communications)</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Service providers (payment processors, shipping companies, IT services)</li>
              <li>Business partners (where necessary for order fulfillment)</li>
              <li>Legal authorities (when required by law)</li>
              <li>Professional advisors (accountants, lawyers)</li>
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">6. Data Security</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">7. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Under GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectify inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To exercise these rights, please contact us at admin@shopulence.co.uk.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">8. Data Retention</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, we retain account information for the duration of the business relationship plus 7 years for legal and accounting purposes.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">9. Cookies</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our website uses cookies to enhance your experience. Cookies are small text files stored on your device. You can control cookies through your browser settings, though this may affect website functionality.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">10. International Data Transfers</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your information may be transferred to and processed in countries outside the UK/EEA. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">11. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">12. Contact Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Email: admin@shopulence.co.uk<br />
              Address: Unit 1-3 Wyvern Estate Beverly Way, Beverly Way, New Malden KT3 4PH<br />
              Shopulence<br />
              Your Global Supply
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
