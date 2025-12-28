import { useState } from 'react';
import { Mail, Send, Building2, Users, Headphones } from 'lucide-react';
import FAQ from '../components/FAQ';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: 'sales',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        department: 'sales',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const departments = [
    {
      icon: Users,
      name: 'Sales',
      email: 'hello@shopulence.com'
    },
    {
      icon: Headphones,
      name: 'Support',
      email: 'hello@shopulence.com'
    },
    {
      icon: Building2,
      name: 'Press & Media',
      email: 'hello@shopulence.com'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-80 bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Get in touch with our team to discuss partnership opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {departments.map((dept, index) => (
              <div key={index} className="bg-[#F3F4F6] p-6 rounded-lg text-center hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#002D62] text-white rounded-full mb-4">
                  <dept.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#002D62] mb-3">{dept.name}</h3>
                <div className="text-sm">
                  <a href={`mailto:${dept.email}`} className="block text-gray-600 hover:text-[#002D62] transition">
                    {dept.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-12 items-center">
            <div className="w-full max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-[#002D62] mb-6">Get in Touch</h2>
              <div className="bg-[#F3F4F6] p-6 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center mb-2">
                    <Mail size={24} className="text-[#002D62] mr-3 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Email</h3>
                  </div>
                  <a href="mailto:hello@shopulence.com" className="text-gray-600 hover:text-[#002D62] transition">
                    hello@shopulence.com
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-[#002D62] mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition"
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition"
                    >
                      <option value="sales">Sales</option>
                      <option value="support">Support</option>
                      <option value="press">Press & Media</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#002D62] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#003d82] transition flex items-center justify-center"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Contact;
