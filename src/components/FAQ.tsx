import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What products does Shopulence offer?',
      answer: 'Shopulence offers a comprehensive range of products including cleaning solutions, DIY & tools, pet care products, health & beauty items, and household essentials. We work with multiple trusted brands to provide quality products for trade partners.'
    },
    {
      question: 'How can I become a trade partner?',
      answer: 'To become a trade partner, simply contact us through our contact form or email us at hello@shopulence.com. Our team will get in touch with you to discuss partnership opportunities, pricing, and requirements. We welcome retailers and trade professionals across the UK and Europe.'
    },
    {
      question: 'What are your delivery options?',
      answer: 'We offer fast and reliable delivery services across the UK and Europe. Next-day delivery is available for UK mainland orders. Our 200,000 square foot distribution center ensures efficient order processing and timely delivery to all our trade partners.'
    },
    {
      question: 'Do you offer minimum order quantities?',
      answer: 'Yes, we do have minimum order quantities that vary depending on the product category and brand. Please contact our sales team at hello@shopulence.com to discuss specific requirements and minimum order quantities for your business needs.'
    },
    {
      question: 'What support do you provide to trade partners?',
      answer: 'We provide comprehensive support to all our trade partners including dedicated account managers, marketing materials, product training, and ongoing customer service. Our team is committed to helping you succeed and grow your business with our products.'
    }
  ];

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#002D62] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                <span className="font-semibold text-lg text-[#002D62] pr-8">
                  {faq.question}
                </span>
                <div
                  className={`text-[#002D62] flex-shrink-0 transition-transform duration-500 ease-in-out ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <ChevronDown size={24} />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

