import { useEffect } from 'react';

const ReturnsAndRefunds = () => {
  useEffect(() => {
    document.title = 'Shopulence | Returns and Refunds';
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Returns and Refunds</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Our policy for returning products and processing refunds
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

            <h2 className="text-3xl font-bold text-[#002D62] mb-4">1. Return Policy Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Shopulence, we are committed to providing quality products and excellent service. If you are not satisfied with your order, we offer a returns and refunds policy to ensure your satisfaction. Please review this policy carefully before initiating a return.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">2. Return Eligibility</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Products may be returned under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Products must be returned within 30 days of delivery</li>
              <li>Products must be in their original, unopened condition</li>
              <li>Products must be in their original packaging with all labels intact</li>
              <li>A valid receipt or proof of purchase must be provided</li>
              <li>Custom orders or personalized products may not be eligible for return</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">3. Damaged or Defective Products</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you receive a damaged or defective product, please contact us within 48 hours of delivery. We will arrange for a replacement or full refund at no additional cost to you. Please provide photos of the damage or defect to assist with processing your claim.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">4. Return Process</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To initiate a return:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-2">
              <li>Contact us at admin@shopulence.co.uk or through your account manager</li>
              <li>Provide your order number and reason for return</li>
              <li>We will issue a Return Merchandise Authorization (RMA) number</li>
              <li>Pack the items securely in their original packaging</li>
              <li>Include the RMA number on the return package</li>
              <li>Ship the package to the address provided</li>
            </ol>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Returns cannot be processed without an RMA number.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">5. Return Shipping</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For returns due to our error (wrong item, damaged, or defective), we will cover the return shipping costs. For other returns, the customer is responsible for return shipping fees. We recommend using a trackable shipping method and retaining the shipping receipt until your return is processed.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">6. Refund Processing</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Once we receive and inspect your returned items:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Refunds will be processed within 10-14 business days</li>
              <li>Refunds will be issued to the original payment method</li>
              <li>Original shipping costs are non-refundable (unless the return is due to our error)</li>
              <li>You will receive an email confirmation when your refund is processed</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">7. Exchanges</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We do not offer direct exchanges. If you wish to exchange an item, please return the original item for a refund and place a new order for the desired product. This ensures accurate inventory management and faster processing.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">8. Non-Returnable Items</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Custom or personalized products</li>
              <li>Perishable goods</li>
              <li>Items that have been used or opened (unless defective)</li>
              <li>Items without original packaging</li>
              <li>Items damaged due to misuse or neglect</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">9. Bulk Orders</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For bulk orders and trade accounts, return terms may vary and should be discussed with your account manager at the time of order. Special return arrangements may be available for wholesale customers.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">10. Late or Missing Refunds</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have not received your refund after 14 business days:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Check your bank account or credit card statement</li>
              <li>Contact your bank or credit card company (it may take time to process)</li>
              <li>Contact us at admin@shopulence.co.uk with your order number</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">11. Contact Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For questions about returns and refunds, please contact us:
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Email: admin@shopulence.co.uk<br />
              Address: Unit 1-3 Wyvern Estate Beverly Way, Beverly Way, New Malden KT3 4PH<br />
              Please include your order number in all communications for faster service.
            </p>

            <h2 className="text-3xl font-bold text-[#002D62] mb-4 mt-8">12. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We reserve the right to modify this Returns and Refunds Policy at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnsAndRefunds;
