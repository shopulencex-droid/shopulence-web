import { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = 'Shopulence | Terms and Conditions';
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().getFullYear()}
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to Shopulence. These Terms and Conditions govern your use of our wholesale distribution services. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, please do not use our services.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">2. Services</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Shopulence provides wholesale distribution and manufacturing services to trade partners and retailers. Our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Distribution of premium brand products</li>
              <li>Trade partner account management</li>
              <li>Product sourcing and procurement</li>
              <li>Warehousing and logistics services</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">3. Trade Account Registration</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To access our wholesale services, you must register for a trade account. You agree to provide accurate, current, and complete information during registration. We reserve the right to reject any application or terminate accounts at our discretion.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">4. Orders and Payment</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All orders are subject to acceptance and availability. Prices are quoted exclusive of VAT unless otherwise stated. Payment terms will be agreed upon during account setup. We reserve the right to change prices at any time, though orders already accepted will be honored at the quoted price.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">5. Delivery</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We aim to deliver orders within the agreed timeframe. Delivery dates are estimates and not guaranteed. Risk in products passes to you upon delivery. You are responsible for inspecting goods upon receipt and reporting any discrepancies within 48 hours.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">6. Returns and Cancellations</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Returns and cancellations are subject to our Returns and Refunds Policy. Please refer to that document for detailed information about our return procedures, conditions, and timeframes.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All content on our website, including logos, text, graphics, and images, is the property of Shopulence or our licensors and is protected by copyright and trademark laws. You may not use our content without prior written permission.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To the fullest extent permitted by law, Shopulence shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the value of the products ordered.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">9. Governing Law</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These Terms and Conditions are governed by English law. Any disputes shall be subject to the exclusive jurisdiction of the English courts.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">10. Changes to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">11. Contact Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at info@shopulence.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
