import React from 'react';
import { Mail, MessageCircle, FileText, Phone } from 'lucide-react';

const Support = () => {
  const faqs = [
    {
      question: 'How do I get started with ServerHub?',
      answer: 'Getting started is easy! Simply create an account, choose your plan, and your server will be ready in minutes. We provide detailed documentation to help you get up and running quickly.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your plan at any time. Your resources will be automatically adjusted, and we will only charge you the prorated difference for the remainder of the billing cycle.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 technical support through our ticketing system. Premium plans include priority support with faster response times and direct phone support.',
    },
    {
      question: 'How do backups work?',
      answer: 'We perform automated daily backups for all plans. Premium plans include more frequent backups and longer retention periods. You can also create manual backups at any time.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How can we help you?
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We are here to help with any questions about our services
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Live Chat</h3>
            <p className="mt-2 text-sm text-gray-500">
              Chat with our support team in real-time
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email Support</h3>
            <p className="mt-2 text-sm text-gray-500">
              Get help via email within 24 hours
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
              Send Email
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Documentation</h3>
            <p className="mt-2 text-sm text-gray-500">
              Browse our detailed documentation
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
              View Docs
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Phone Support</h3>
            <p className="mt-2 text-sm text-gray-500">
              Premium support for business plans
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
              Call Us
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;